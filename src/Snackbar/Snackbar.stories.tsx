import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { MySnackbarProps } from "../Snackbar/Snackbar.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import Snackbar from "../Snackbar/Snackbar";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";

import { Box, Link, useTheme } from "@material-ui/core";
export default {
  title: "Snackbar",
  component: Snackbar,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<MySnackbarProps> = (args) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleClose = () => {
    setOpen1(false);
  };

  return (
    <SWAPTheme>
      點點看！
      <div
        style={{
          display: "flex",
          width: 400,
          justifyContent: "space-between",
          height: 1000,
        }}
      >
        <Button onClick={() => setOpen1(true)} size="small" variant="primary">
          Default
        </Button>
        <Button onClick={() => setOpen2(true)} size="small" variant="primary">
          Success
        </Button>
        <Button onClick={() => setOpen3(true)} size="small" variant="primary">
          Error
        </Button>
      </div>
      <Snackbar
        width={150}
        open={open1}
        onClose={handleClose}
        transitionDirection="up"
        message="此封郵件已刪除。"
        revertButton={{ onClick: handleClose }}
        closeIcon={{ onClick: handleClose }}
      />
      <Snackbar
        checkIcon
        open={open2}
        transitionDirection="up"
        variant="success"
        onClose={() => setOpen2(false)}
        message="你已經成功送出表單。"
        closeIcon={{ onClick: () => setOpen2(false) }}
      />
      <Snackbar
        errorIcon
        open={open3}
        transitionDirection="up"
        variant="error"
        onClose={() => setOpen3(false)}
        message="你輸入的資料有問題，請再次檢查。"
        closeIcon={{ onClick: () => setOpen3(false) }}
      />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
