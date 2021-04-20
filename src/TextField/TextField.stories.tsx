import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MyTextFieldProps } from "./TextField.types";
import TextField from "./TextField";
import MenuItem from "../Menu/MenuItem";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import CheckIcon from "@material-ui/icons/Check";

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
  { value: -1, label: "預設選項" },
  { value: 1, label: "選項一" },
  { value: 2, label: "選項二" },
  { value: 3, label: "選項三" },
];
const Demo: Story<MyTextFieldProps> = (args) => {
  const [value, setValue] = useState(-1);

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
          <SWAPSpace />
          <TextField
            multiline
            rows={3}
            width={240}
            height={90}
            placeholder="Placeholder"
          />
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            placeholder="Placeholder"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  style={{
                    color: "#6f6f6f",
                    width: 24,
                    height: 24,
                    marginRight: 10,
                  }}
                />
              ),
            }}
          />
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            placeholder="Placeholder"
            InputProps={{
              endAdornment: (
                <AccountCircleOutlinedIcon
                  style={{ color: "#6f6f6f", width: 24, height: 24 }}
                />
              ),
            }}
          />
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            placeholder="Placeholder"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  style={{
                    color: "#6f6f6f",
                    width: 24,
                    height: 24,
                    marginRight: 10,
                  }}
                />
              ),
              endAdornment: (
                <AccountCircleOutlinedIcon
                  style={{ color: "#6f6f6f", width: 24, height: 24 }}
                />
              ),
            }}
          />
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            select
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          >
            {options.map((option: any, i: number) => (
              <MenuItem
                key={i}
                height={36}
                width={240}
                value={option.value}
                style={{
                  backgroundColor: value === option.value ? "white" : undefined,
                  opacity: value === option.value ? 1 : undefined,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                  color: value === option.value ? "#4862CC" : undefined,
                }}
                disabled={value === option.value}
                iconChildren={
                  value === option.value ? (
                    <CheckIcon style={{ height: 20, color: "#4862CC" }} />
                  ) : null
                }
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <div> Default</div>
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
          />
          <SWAPSpace />
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
            {options.map((option: any, i: number) => (
              <MenuItem
                key={i}
                height={36}
                width={240}
                value={option.value}
                style={{
                  backgroundColor: value === option.value ? "white" : undefined,
                  opacity: value === option.value ? 1 : undefined,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                  color: value === option.value ? "#4862CC" : undefined,
                }}
                disabled={value === option.value}
                iconChildren={
                  value === option.value ? (
                    <CheckIcon style={{ height: 20, color: "#4862CC" }} />
                  ) : null
                }
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
            InputProps={{
              startAdornment: (
                <AccountCircleOutlinedIcon
                  style={{
                    color: "#6f6f6f",
                    width: 24,
                    height: 24,
                    marginRight: 10,
                  }}
                />
              ),
            }}
          />
          <SWAPSpace />
          <TextField
            width={240}
            height={56}
            label="Label"
            defaultValue="Value"
            InputProps={{
              endAdornment: (
                <AccountCircleOutlinedIcon
                  style={{ color: "#6f6f6f", width: 24, height: 24 }}
                />
              ),
            }}
          />
          <SWAPSpace />
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
          <SWAPSpace />
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
          <SWAPSpace />
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
            {options.map((option: any, i: number) => (
              <MenuItem
                key={i}
                height={36}
                width={240}
                value={option.value}
                style={{
                  backgroundColor: value === option.value ? "white" : undefined,
                  opacity: value === option.value ? 1 : undefined,
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                  color: value === option.value ? "#4862CC" : undefined,
                }}
                disabled={value === option.value}
                iconChildren={
                  value === option.value ? (
                    <CheckIcon style={{ height: 20, color: "#4862CC" }} />
                  ) : null
                }
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <SWAPSpace size="m" />
          Disabled
          <SWAPSpace />
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
