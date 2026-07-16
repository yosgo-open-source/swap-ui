import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import AutoComplete from "./AutoComplete";

const meta: Meta<typeof AutoComplete> = { title: "Inputs/AutoComplete", component: AutoComplete };
export default meta;
type Story = StoryObj<typeof AutoComplete>;

const BANKS = ["台灣銀行", "國泰世華", "玉山銀行", "中國信託", "台新銀行", "富邦銀行"];

import type { AutoCompleteProps } from "./AutoComplete.types";

const Demo: React.FC<Partial<AutoCompleteProps>> = (p) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState<string>("");
  return (
    <div style={{ height: 420, paddingTop: 80 }}>
      <Button variant="secondary" onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}>
        {selected || "選擇銀行"}
      </Button>
      <AutoComplete
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        title="選擇銀行"
        placeholder="搜尋銀行"
        options={BANKS}
        getOptionLabel={(o) => String(o)}
        value={selected || undefined}
        anchorOrigin={{ vertical: 8, horizontal: 0 }}
        optionsMaxHeight={200}
        onChange={(_, v) => {
          if (typeof v === "string") setSelected(v);
          setAnchorEl(null);
        }}
        handleNoOptionsValueChange={(v) => {
          setSelected(v);
          setAnchorEl(null);
        }}
        {...p}
      />
    </div>
  );
};

export const Basic: Story = { render: () => <Demo /> };
export const DisableFreeInput: Story = { render: () => <Demo disableFreeInput /> };

export const Playground: Story = {
  parameters: { controls: { include: ["title", "placeholder", "disableFreeInput", "width", "optionsMaxHeight", "addNewOptionsText"] } },
  args: { title: "選擇銀行", placeholder: "搜尋銀行", disableFreeInput: false, width: 320, optionsMaxHeight: 200 },
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    addNewOptionsText: { control: "text", description: "自由輸入連結文案（預設「使用」）" },
    width: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
    optionsMaxHeight: { control: "number", description: "單位 px", table: { type: { summary: "number | string" } } },
  },
  render: (args) => <Demo {...args} />,
};
