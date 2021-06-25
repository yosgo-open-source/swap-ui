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
          Default + Action
        </Button>
        <Button onClick={() => setOpen2(true)} size="small" variant="primary">
          Success
        </Button>
        <Button onClick={() => setOpen3(true)} size="small" variant="primary">
          Error
        </Button>
      </div>
      <Snackbar
        open={open1}
        onClose={handleClose}
        transitionDirection="up"
        message="此封郵件已刪除。"
        action={
          <Box display="flex">
            <Link
              component="button"
              variant="body1"
              underline="none"
              style={{ color: "#F7B52C" }}
              onClick={() => setOpen1(false)}
            >
              <b>收回操作</b>
            </Link>
            <IconButton
              style={{ padding: 0, marginRight: 11, marginLeft: 13 }}
              onClick={() => setOpen1(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="white"
                />
              </svg>
            </IconButton>
          </Box>
        }
      />
      <Snackbar
        open={open2}
        transitionDirection="up"
        variant="success"
        onClose={() => setOpen2(false)}
        message="你已經成功送出表單。"
        action={
          <>
            <IconButton
              width={24}
              height={24}
              hoverColor="#00751B"
              style={{ padding: 0 }}
              onClick={() => setOpen2(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="white"
                />
              </svg>
            </IconButton>
          </>
        }
      />
      <Snackbar
        open={open3}
        transitionDirection="up"
        variant="error"
        onClose={() => setOpen3(false)}
        message={
          <Box display="flex" alignItems="center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 11 }}
            >
              <path
                d="M11 11H9V5H11V11ZM11 15H9V13H11V15ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                fill="white"
              />
            </svg>
            你輸入的資料有問題，請再次檢查。
          </Box>
        }
        action={
          <IconButton
            style={{ padding: 0, marginRight: 11, marginLeft: 13 }}
            onClick={() => setOpen3(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="white"
              />
            </svg>
          </IconButton>
        }
      />
    </SWAPTheme>
  );
};
export const 認識 = Demo.bind({});
認識.args = {};
