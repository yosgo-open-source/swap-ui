import type { Meta, StoryObj } from "@storybook/react-vite";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = { title: "Inputs/RadioButton", component: RadioButton };
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Group: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      <Stack direction="row" spacing={2}>
        <RadioButton value="monthly" label="月繳" />
        <RadioButton value="yearly" label="年繳" />
        <RadioButton value="none" label="停用" disabled />
      </Stack>
    </RadioGroup>
  ),
};

export const Playground: Story = {
  args: { label: "選項", disabled: false, disableHover: false },
  argTypes: { label: { control: "text" } },
};
