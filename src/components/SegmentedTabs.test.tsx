import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import SegmentedTab from "./SegmentedTab";
import SegmentedTabs from "./SegmentedTabs";

function Demo() {
  const [value, setValue] = React.useState(0);
  return (
    <SWAPThemeProvider>
      <SegmentedTabs value={value} onChange={(_, v) => setValue(v)}>
        <SegmentedTab label="我的請款單" />
        <SegmentedTab label="SWAP Point 明細" />
      </SegmentedTabs>
      <div>目前：{value}</div>
    </SWAPThemeProvider>
  );
}

test("點擊切換 value", async () => {
  render(<Demo />);
  await userEvent.click(screen.getByText("SWAP Point 明細"));
  expect(screen.getByText("目前：1")).toBeInTheDocument();
});
