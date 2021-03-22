import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MyTextFieldProps } from "./TextField.types";
import TextField from "./TextField";
import MenuItem from "../Menu/MenuItem";
import Typography from "../Typography/Typography";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default {
  title: "TextField",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};
const options = [
  { value: "option1" },
  { value: "option2" },
  { value: "option3" },
];
const Demo: Story<MyTextFieldProps> = (args) => {
  const [value, setValue] = useState("Select");

  return (
    <SWAPTheme>
      調整看看！
      <div style={{ width: 800 }}>
        <TextField {...args} />
      </div>
      <SWAPSpace size="m" />
      <div
        style={{ display: "flex", justifyContent: "space-around", width: 800 }}
      >
        <div>
          Placeholder
          <SWAPSpace size="s" />
          <TextField width={240} height={56} placeholder="Placeholder" />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            placeholder="Placeholder"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
              ),
            }}
          />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            placeholder="Placeholder"
            InputProps={{
              endAdornment: (
                <AccountCircleOutlinedIcon style={{ width: 20, height: 20 }} />
              ),
            }}
          />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            select
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          >
            <MenuItem disabled value={value}>
              <Typography>{value}</Typography>
            </MenuItem>
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          Default
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
          />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            label="Label"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
            select
          >
            <MenuItem disabled value={value}>
              <Typography>{value}</Typography>
            </MenuItem>
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
              ),
            }}
          />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
            InputProps={{
              endAdornment: (
                <AccountCircleOutlinedIcon style={{ width: 20, height: 20 }} />
              ),
            }}
          />
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
            helperText="Helper Text"
          />
        </div>
        <div>
          Error
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            error
            label="Label"
            defaultValue="Value"
            helperText="Error Message"
          />
          <SWAPSpace size="m" />
          Focus
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            select
            autoFocus
            label="Label"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          >
            <MenuItem disabled value={value}>
              <Typography>{value}</Typography>
            </MenuItem>
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <SWAPSpace size="m" />
          Disabled
          <SWAPSpace size="s" />
          <TextField
            width={240}
            height={56}
            disabled
            label="Label"
            defaultValue="Value"
          />
          <SWAPSpace size="m" />
        </div>
      </div>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = { label: "SWAP", helperText: "swap", width: "100%", height: 56 };
