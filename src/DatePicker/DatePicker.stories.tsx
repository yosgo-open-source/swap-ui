import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { DatePickerProps } from "./DatePicker.types";
import DatePicker from "./DatePicker";
import { useMediaQuery } from "@material-ui/core";

export default {
  title: "DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Demo: Story<DatePickerProps> = (args) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("2021-12-30");
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <SWAPTheme>
      <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
        <DatePicker style={{ marginBottom: 16 }} getValue={(d) => setDate(d)} />
        <DatePicker
          format="month"
          style={{ marginBottom: 16 }}
          getValue={(d) => setDate(d)}
        />
        <div
          onClick={() => {
            setOpen(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              fill="white"
            />
            <path
              d="M16.6667 6.00002H16V4.66669H14.6667V6.00002H9.33333V4.66669H8V6.00002H7.33333C6.59333 6.00002 6 6.60002 6 7.33335V16.6667C6 17.4 6.59333 18 7.33333 18H16.6667C17.4 18 18 17.4 18 16.6667V7.33335C18 6.60002 17.4 6.00002 16.6667 6.00002ZM16.6667 16.6667H7.33333V10H16.6667V16.6667ZM16.6667 8.66669H7.33333V7.33335H16.6667V8.66669ZM8.66667 11.3334H12V14.6667H8.66667V11.3334Z"
              fill="#4862CC"
            />
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              stroke="#4862CC"
            />
          </svg>
        </div>
        <DatePicker
          mobile={isMobile}
          open={open}
          onClose={() => setOpen(false)}
          format="day"
          min="2021-12-7"
          // max="2021-12-28"
          // defaultValue="2021-12-5"
          ModalProps={{
            title: "選擇日期",
          }}
          style={{ marginBottom: 16 }}
          value={date}
          getValue={(d) => setDate(d)}
        />
      </div>
      <h3>日期：{date}</h3>
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
