import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { expect, within } from "storybook/test";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = { title: "Feedback/Banner", component: Banner };
export default meta;
type Story = StoryObj<typeof Banner>;

const VARIANTS = ["normal", "info", "success", "warning", "error"] as const;

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 480 }}>
      {VARIANTS.map((v) => (
        <Banner key={v} variant={v}>
          這是 {v} 提示訊息，用來告知使用者目前的狀態或需要注意的事項。
        </Banner>
      ))}
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["variant", "children", "mobile", "width"] } },
  args: { variant: "info", children: "提示訊息內容", mobile: false },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    children: { control: "text" },
    icon: { control: false },
    width: { control: "text", description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）", table: { type: { summary: "number | string" } } },
  },
};

// ---- icon 與第一行文字對齊：須在真實瀏覽器量版面，jsdom 沒有 layout ----

const PHRASE = "提示訊息內容"; // 6 字；480 寬的 Banner 一行約可放 34 字
const ONE_LINE = PHRASE.repeat(3);
const TWO_LINES = PHRASE.repeat(9);
const THREE_LINES = PHRASE.repeat(15);

const centerOf = (r: DOMRect) => r.top + r.height / 2;

function measure(banner: HTMLElement, text: string) {
  const textEl = within(banner).getByText(text);
  const lineHeight = parseFloat(getComputedStyle(textEl).lineHeight);
  const textRect = textEl.getBoundingClientRect();
  const icon = banner.querySelector("svg")!.getBoundingClientRect();
  return {
    lines: Math.round(textRect.height / lineHeight),
    offsetFromFirstLine: Math.abs(centerOf(icon) - (textRect.top + lineHeight / 2)),
    offsetFromBanner: Math.abs(centerOf(icon) - centerOf(banner.getBoundingClientRect())),
    bannerHeight: banner.getBoundingClientRect().height,
  };
}

const lineStory = (text: string, expectedLines: number, expectedHeight: number): Story => ({
  render: () => (
    <div style={{ width: 480 }}>
      <Banner data-testid="banner">{text}</Banner>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const m = measure(within(canvasElement).getByTestId("banner"), text);
    await expect(m.lines).toBe(expectedLines);
    await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
    await expect(m.bannerHeight).toBeCloseTo(expectedHeight, 0);
  },
});

export const SingleLine = lineStory(ONE_LINE, 1, 50);
export const TwoLines = lineStory(TWO_LINES, 2, 59.6);
export const ThreeLines = lineStory(THREE_LINES, 3, 76.4);

/** 掛載後容器變窄、單行變多行，仍須對齊第一行 */
export const NarrowedContainer: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Banner data-testid="banner">{ONE_LINE}</Banner>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const banner = within(canvasElement).getByTestId("banner");
    await expect(measure(banner, ONE_LINE).lines).toBe(1);
    banner.parentElement!.style.width = "200px";
    const m = measure(banner, ONE_LINE);
    await expect(m.lines).toBeGreaterThan(1);
    await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
  },
};

/** 指定 height 的單行 Banner 維持垂直置中，不可貼頂 */
export const FixedHeight: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Banner data-testid="banner" height={56}>
        {ONE_LINE}
      </Banner>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const m = measure(within(canvasElement).getByTestId("banner"), ONE_LINE);
    await expect(m.bannerHeight).toBe(56);
    await expect(m.offsetFromBanner).toBeLessThanOrEqual(1);
    await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
  },
};

/** 指定的 height 小於預設最小高度時，以 height 為準 */
export const SmallFixedHeight: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <Banner data-testid="banner" height={40}>
        {ONE_LINE}
      </Banner>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const m = measure(within(canvasElement).getByTestId("banner"), ONE_LINE);
    await expect(m.bannerHeight).toBe(40);
  },
};

const customIcon = (size: number) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1747C2" />
  </svg>
);

/** 自訂 icon 不論大小，都以第一行置中 */
export const CustomIconSizes: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 480 }}>
      <Banner data-testid="icon-16" icon={customIcon(16)}>
        {THREE_LINES}
      </Banner>
      <Banner data-testid="icon-40" icon={customIcon(40)}>
        {THREE_LINES}
      </Banner>
    </Stack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const id of ["icon-16", "icon-40"]) {
      const m = measure(canvas.getByTestId(id), THREE_LINES);
      await expect(m.lines).toBe(3);
      await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
    }
  },
};
