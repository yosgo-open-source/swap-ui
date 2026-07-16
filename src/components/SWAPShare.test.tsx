import { render } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import SWAPShare from "./SWAPShare";

test("渲染三顆分享鈕（Messenger/LINE/Email）", () => {
  const { container } = render(
    <SWAPThemeProvider>
      <SWAPShare url="https://swap.work" sharedContent="分享內容" />
    </SWAPThemeProvider>,
  );
  // 兩顆自製 icon（Messenger/Email）+ 一顆 react-share LINE 按鈕
  expect(container.querySelectorAll(".swap_share_icon").length).toBe(2);
  expect(container.querySelector("button")).toBeInTheDocument(); // react-share LineShareButton
});
