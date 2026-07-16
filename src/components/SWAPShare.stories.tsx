import type { Meta, StoryObj } from "@storybook/react-vite";
import SWAPShare from "./SWAPShare";

const meta: Meta<typeof SWAPShare> = { title: "Display/SWAPShare", component: SWAPShare };
export default meta;
type Story = StoryObj<typeof SWAPShare>;

export const Basic: Story = {
  render: () => (
    <SWAPShare
      url="https://swap.work"
      emailSubject="推薦你看看 SWAP"
      sharedContent="自由工作者的請款平台"
    />
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["url", "emailSubject", "sharedContent"] } },
  args: { url: "https://swap.work", emailSubject: "推薦", sharedContent: "內容" },
  argTypes: {
    url: { control: "text", description: "分享連結；留空用當前頁網址" },
    emailSubject: { control: "text" },
    sharedContent: { control: "text" },
  },
};
