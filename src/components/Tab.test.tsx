import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Tab from "./Tab";
import Tabs from "./Tabs";
import TabPanel from "./TabPanel";

function Demo() {
  const [value, setValue] = React.useState(0);
  return (
    <SWAPThemeProvider>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="帳戶" selected={value === 0} />
        <Tab label="設定" selected={value === 1} />
      </Tabs>
      <TabPanel value={value} index={0}>
        帳戶內容
      </TabPanel>
      <TabPanel value={value} index={1}>
        設定內容
      </TabPanel>
    </SWAPThemeProvider>
  );
}

test("切換 tab 顯示對應 panel", async () => {
  render(<Demo />);
  expect(screen.getByText("帳戶內容")).toBeVisible();
  expect(screen.queryByText("設定內容")).not.toBeInTheDocument();
  await userEvent.click(screen.getByText("設定"));
  expect(screen.getByText("設定內容")).toBeVisible();
});
