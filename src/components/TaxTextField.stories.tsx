import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import TaxTextField from "./TaxTextField";
import Typography from "./Typography";
import type { TaxFiledValueProps, IncomeCodeProps } from "./TaxTextField.types";

const meta: Meta<typeof TaxTextField> = { title: "Inputs/TaxTextField", component: TaxTextField };
export default meta;
type Story = StoryObj<typeof TaxTextField>;

const Demo: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const [value, setValue] = React.useState<TaxFiledValueProps | null>(null);
  return (
    <Stack spacing={2} sx={{ maxWidth: 640 }}>
      <TaxTextField
        mobile={mobile}
        codeValue={(value?.incomeCode ?? "") as IncomeCodeProps}
        domainValue={value?.expenseCodeAndLabel ?? ""}
        domainCodeValue={value?.expenseCode ?? ""}
        onChange={setValue}
      />
      {value ? (
        <Typography variant="caption2" color="tertiary">
          {value.taxDescription || `${value.incomeCode} ${value.incomeLabel}`}
        </Typography>
      ) : null}
    </Stack>
  );
};

export const Basic: Story = { render: () => <Demo /> };
export const Mobile: Story = { render: () => <Demo mobile /> };

export const Playground: Story = {
  parameters: { controls: { include: ["mobile", "codeError", "codeHelperText", "domainError", "domainHelperText"] } },
  args: { mobile: false, codeError: false, codeHelperText: "", domainError: false, domainHelperText: "" },
  argTypes: {
    codeHelperText: { control: "text" },
    domainHelperText: { control: "text" },
  },
  render: (args) => (
    <TaxTextField {...args} codeValue="9A" domainValue="" />
  ),
};
