import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DatePicker from "./DatePicker";
import Typography from "./Typography";
import type { DatePickerProps } from "./DatePicker.types";

const meta: Meta<typeof DatePicker> = { title: "Inputs/DatePicker", component: DatePicker };
export default meta;
type Story = StoryObj<typeof DatePicker>;

const Demo: React.FC<Partial<DatePickerProps>> = (p) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState("");
  return (
    <Stack spacing={1} sx={{ alignItems: "flex-start" }}>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {date || "選擇日期"}
      </Button>
      <Typography variant="caption2" color="tertiary">
        getValue：{date || "（尚未選擇）"}
      </Typography>
      <DatePicker
        open={open}
        onClose={() => setOpen(false)}
        getValue={setDate}
        value={date || "2026-07-16"}
        {...p}
      />
    </Stack>
  );
};

export const Day: Story = { render: () => <Demo format="day" /> };
export const Month: Story = { render: () => <Demo format="month" /> };
export const Year: Story = { render: () => <Demo format="year" /> };

export const Playground: Story = {
  parameters: { controls: { include: ["format", "min", "max", "mobile"] } },
  args: { format: "day", min: "", max: "", mobile: false },
  argTypes: {
    format: { control: "select", options: ["day", "month", "year"], description: "選擇精度" },
    min: { control: "text", description: "最小可選日期（YYYY-MM-DD）" },
    max: { control: "text", description: "最大可選日期（YYYY-MM-DD）" },
  },
  render: (args) => <Demo {...args} />,
};
