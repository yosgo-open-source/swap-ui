import {
  Toolbar,
  Grid,
  IconButton,
  Divider as Line,
  Box,
  useTheme,
  makeStyles,
  Theme,
} from "@material-ui/core";
import MaterialAppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import React, { useState } from "react";
import styled from "styled-components";

import SWAPLogo from "../SWAPLogo/SWAPLogo";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import Container from "../Container/Container";
import Typography from "../Typography/Typography";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";

import { AppBarProps } from "./AppBar.types";
import Tabs from "../Tab/Tabs";
import Tab from "../Tab/Tab";
import { useBreakpoints } from "..";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const AppBar: React.FC<AppBarProps> = ({}) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [login, setLogin] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const useStyles = makeStyles((theme: Theme) => ({
    userToolbar: {
      background: "white",
      minHeight: 56,
      padding: 0,
    },
    menuIcon: {
      backgroundColor: theme.primary.primary50,
      "&:hover": {
        backgroundColor: theme.primary.primary100,
      },
    },
  }));
  const classes = useStyles();
  const matches = useBreakpoints("md");
  const matchesSM = useBreakpoints("sm");
  return (
    <div>
      <AppBarWrap>
        <MaterialAppBar
          position="fixed"
          style={{
            boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.08)",
            zIndex: 1090,
            border: "0px solid white",
            backgroundColor: "white",
            // transition: "all 1s ease-out 0s",
          }}
        >
          <Toolbar className={classes.userToolbar}>
            <Box width="100%">
              <Container>
                {landingPage ? (
                  //Landing Page
                  <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <SWAPLogo />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {matches ? (
                          <Box display="flex" alignItems="center">
                            <Tabs value={value}>
                              <Tab
                                label="產品介紹"
                                onClick={() => setValue(0)}
                              />
                              <Tab
                                label="價格方案"
                                onClick={() => setValue(1)}
                              />
                              <Tab
                                label="常見問題"
                                onClick={() => setValue(2)}
                              />
                            </Tabs>
                            {login ? (
                              <Button
                                size="small"
                                variant="primary"
                                style={{ marginLeft: 12, marginRight: 8 }}
                                onClick={() => {
                                  setLandingPage(false);
                                }}
                              >
                                前往帳戶總覽
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ marginLeft: 7 }}
                                >
                                  <path
                                    d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                                    fill="white"
                                  />
                                </svg>
                              </Button>
                            ) : (
                              <Box display="flex" alignItems="center">
                                <Button
                                  size="small"
                                  variant="primary"
                                  style={{ marginLeft: 12, marginRight: 8 }}
                                  onClick={() => {
                                    setLogin(true);
                                  }}
                                >
                                  註冊帳號
                                </Button>
                                <Button
                                  size="small"
                                  variant="secondary"
                                  onClick={() => {
                                    setLogin(true);
                                  }}
                                >
                                  登入
                                </Button>
                              </Box>
                            )}
                          </Box>
                        ) : (
                          <IconButton
                            className={classes.menuIcon}
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              marginLeft: 8,
                            }}
                            onClick={handleClick}
                          >
                            <MenuIcon color="primary" fontSize="small" />
                          </IconButton>
                        )}

                        {matchesSM ? (
                          // Desktop
                          <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 40, horizontal: -168 }}
                            getContentAnchorEl={null}
                          >
                            <MenuItem width={200}>產品介紹</MenuItem>
                            <MenuItem width={200}>價格方案</MenuItem>
                            <MenuItem width={200}>常見問題</MenuItem>
                            <SWAPSpace size="xs" />
                            <Line />
                            <SWAPSpace size="xs" />
                            {login ? (
                              <MenuItem width={200} hoverIconColor="white">
                                <Box width="100%">
                                  <Button
                                    fullWidth
                                    size="small"
                                    variant="primary"
                                    onClick={() => {
                                      setLandingPage(false);
                                      setAnchorEl(null);
                                    }}
                                  >
                                    前往帳戶總覽
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        marginLeft: 7,
                                      }}
                                    >
                                      <path
                                        d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </Button>
                                </Box>
                              </MenuItem>
                            ) : (
                              <Box>
                                <MenuItem width={200}>
                                  <Box width="100%">
                                    <Button
                                      fullWidth
                                      size="small"
                                      variant="primary"
                                      onClick={() => {
                                        setLogin(true);
                                      }}
                                    >
                                      註冊帳號
                                    </Button>
                                  </Box>
                                </MenuItem>
                                <MenuItem width={200}>
                                  <Box width="100%">
                                    <Button
                                      fullWidth
                                      size="small"
                                      variant="secondary"
                                      onClick={() => {
                                        setLogin(true);
                                      }}
                                    >
                                      登入
                                    </Button>
                                  </Box>
                                </MenuItem>
                              </Box>
                            )}
                          </Menu>
                        ) : (
                          // Mobile
                          <Modal
                            open={Boolean(anchorEl)}
                            title={<SWAPLogo />}
                            onClose={handleClose}
                            bodyPadding="0px"
                            mobile
                            footerDisplayColumn
                            primaryButton={
                              !login
                                ? {
                                    title: "註冊帳號",
                                    onClick: () => {
                                      setLogin(true);
                                    },
                                  }
                                : {
                                    title: (
                                      <Box width="100%">
                                        前往帳戶總覽
                                        <svg
                                          width="14"
                                          height="14"
                                          viewBox="0 0 14 14"
                                          fill="white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            marginLeft: 7,
                                          }}
                                        >
                                          <path
                                            d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </Box>
                                    ),
                                    onClick: () => {
                                      setLandingPage(false);
                                      setAnchorEl(null);
                                    },
                                  }
                            }
                            secondaryButton={
                              !login
                                ? {
                                    title: "登入",
                                    onClick: () => {
                                      setLogin(true);
                                    },
                                  }
                                : null
                            }
                          >
                            <Box>
                              <SWAPSpace size="xs" />
                              <MenuItem height={36} width="100%">
                                產品介紹
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                價格方案
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                常見問題
                              </MenuItem>
                              <SWAPSpace size="xs" />
                            </Box>
                          </Modal>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                ) : (
                  //Dashboard
                  <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                      <Box display="flex" alignItems="center">
                        <SWAPLogo />
                        {matches ? (
                          <Tabs value={value} style={{ marginLeft: 40 }}>
                            <Tab label="帳戶總覽" onClick={() => setValue(0)} />
                            <Tab label="個人頁面" onClick={() => setValue(1)} />
                          </Tabs>
                        ) : null}
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {matches ? (
                          <Box display="flex" alignItems="center">
                            <Typography variant="body2" color="black1000">
                              歡迎回來，
                            </Typography>
                            <Typography variant="subtitle" color="black1000">
                              XXXX ！
                            </Typography>
                          </Box>
                        ) : null}
                        <IconButton
                          className={classes.menuIcon}
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            marginLeft: 8,
                          }}
                          onClick={handleClick}
                        >
                          <MenuIcon color="primary" fontSize="small" />
                        </IconButton>
                        {matches ? (
                          // Desktop
                          <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            // open={true}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 40, horizontal: 32 }}
                            getContentAnchorEl={null}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            style={{ paddingRight: 0 }}
                          >
                            <MenuItem width={200}>帳戶總覽</MenuItem>
                            <SWAPSpace size="xs" />
                            <Line />
                            <SWAPSpace size="xs" />
                            <MenuItem width={200} disabled>
                              <Typography variant="caption1">
                                個人首頁
                              </Typography>
                            </MenuItem>
                            <MenuItem width={200}>
                              <Box display="flex" alignContent="center">
                                <Box
                                  marginRight="9px"
                                  display="flex"
                                  alignSelf="center"
                                >
                                  <svg
                                    width="14.66"
                                    height="14.66"
                                    viewBox="0 0 14.66 14.66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.99992 11.8C5.33325 11.8 3.85992 10.9466 2.99992 9.66665C3.01992 8.33331 5.66659 7.59998 6.99992 7.59998C8.33325 7.59998 10.9799 8.33331 10.9999 9.66665C10.1399 10.9466 8.66659 11.8 6.99992 11.8ZM6.99992 2.33331C7.53035 2.33331 8.03906 2.54403 8.41413 2.9191C8.78921 3.29417 8.99992 3.80288 8.99992 4.33331C8.99992 4.86375 8.78921 5.37245 8.41413 5.74753C8.03906 6.1226 7.53035 6.33331 6.99992 6.33331C6.46949 6.33331 5.96078 6.1226 5.5857 5.74753C5.21063 5.37245 4.99992 4.86375 4.99992 4.33331C4.99992 3.80288 5.21063 3.29417 5.5857 2.9191C5.96078 2.54403 6.46949 2.33331 6.99992 2.33331ZM6.99992 0.333313C6.12444 0.333313 5.25753 0.505751 4.4487 0.840783C3.63986 1.17581 2.90493 1.66688 2.28587 2.28593C1.03563 3.53618 0.333252 5.23187 0.333252 6.99998C0.333252 8.76809 1.03563 10.4638 2.28587 11.714C2.90493 12.3331 3.63986 12.8241 4.4487 13.1592C5.25753 13.4942 6.12444 13.6666 6.99992 13.6666C8.76803 13.6666 10.4637 12.9643 11.714 11.714C12.9642 10.4638 13.6666 8.76809 13.6666 6.99998C13.6666 3.31331 10.6666 0.333313 6.99992 0.333313Z"
                                      fill="#6F6F6F"
                                    />
                                  </svg>
                                </Box>
                                帳戶設定
                              </Box>
                            </MenuItem>
                            <MenuItem width={200}>
                              <Box display="flex" alignContent="center">
                                <Box
                                  marginRight="9px"
                                  display="flex"
                                  alignSelf="center"
                                >
                                  <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.3333 3.33335H1.66659V2.00002H12.3333V3.33335ZM12.3333 10H1.66659V6.00002H12.3333V10ZM12.3333 0.666687H1.66659C0.926585 0.666687 0.333252 1.26002 0.333252 2.00002V10C0.333252 10.3536 0.473728 10.6928 0.723776 10.9428C0.973825 11.1929 1.31296 11.3334 1.66659 11.3334H12.3333C12.6869 11.3334 13.026 11.1929 13.2761 10.9428C13.5261 10.6928 13.6666 10.3536 13.6666 10V2.00002C13.6666 1.26002 13.0666 0.666687 12.3333 0.666687Z"
                                      fill="#6F6F6F"
                                    />
                                  </svg>
                                </Box>
                                付款紀錄
                              </Box>
                            </MenuItem>
                            <MenuItem width={200}>
                              <Box display="flex" alignContent="center">
                                <Box
                                  marginRight="9px"
                                  display="flex"
                                  alignSelf="center"
                                >
                                  <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.66671 0.666626C1.31309 0.666626 0.973947 0.807102 0.723898 1.05715C0.47385 1.3072 0.333374 1.64634 0.333374 1.99996V4.66663C1.07337 4.66663 1.66671 5.26663 1.66671 5.99996C1.66671 6.35358 1.52623 6.69272 1.27618 6.94277C1.02613 7.19282 0.686996 7.33329 0.333374 7.33329V9.99996C0.333374 10.3536 0.47385 10.6927 0.723898 10.9428C0.973947 11.1928 1.31309 11.3333 1.66671 11.3333H12.3334C12.687 11.3333 13.0261 11.1928 13.2762 10.9428C13.5262 10.6927 13.6667 10.3536 13.6667 9.99996V7.33329C13.3131 7.33329 12.9739 7.19282 12.7239 6.94277C12.4739 6.69272 12.3334 6.35358 12.3334 5.99996C12.3334 5.25996 12.9334 4.66663 13.6667 4.66663V1.99996C13.6667 1.25996 13.0667 0.666626 12.3334 0.666626H1.66671ZM9.33337 2.66663L10.3334 3.66663L4.66671 9.33329L3.66671 8.33329L9.33337 2.66663ZM4.87337 2.69329C5.52671 2.69329 6.05337 3.21996 6.05337 3.87329C6.05337 4.18625 5.92905 4.48639 5.70776 4.70768C5.48647 4.92897 5.18633 5.05329 4.87337 5.05329C4.22004 5.05329 3.69337 4.52663 3.69337 3.87329C3.69337 3.56034 3.8177 3.2602 4.03899 3.03891C4.26028 2.81761 4.56042 2.69329 4.87337 2.69329ZM9.12671 6.94663C9.78004 6.94663 10.3067 7.47329 10.3067 8.12663C10.3067 8.43958 10.1824 8.73972 9.96109 8.96101C9.7398 9.18231 9.43966 9.30662 9.12671 9.30662C8.47337 9.30662 7.94671 8.77996 7.94671 8.12663C7.94671 7.81367 8.07103 7.51353 8.29232 7.29224C8.51361 7.07095 8.81375 6.94663 9.12671 6.94663Z"
                                      fill="#6F6F6F"
                                    />
                                  </svg>
                                </Box>
                                我的優惠券
                              </Box>
                            </MenuItem>
                            <MenuItem width={200}>
                              <Box display="flex" alignItems="center">
                                <Box
                                  marginRight="9px"
                                  display="flex"
                                  alignSelf="center"
                                >
                                  <svg
                                    width="14.66"
                                    height="14.66"
                                    viewBox="0 0 14.66 14.66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.4733 12.5267L12.5266 13.4734C12.4017 13.5975 12.2327 13.6672 12.0566 13.6672C11.8805 13.6672 11.7115 13.5975 11.5866 13.4734L3.66663 5.56671C3.44983 5.62951 3.22564 5.66314 2.99996 5.66671C2.57549 5.6664 2.15723 5.56478 1.77995 5.37028C1.40267 5.17579 1.07727 4.89404 0.8308 4.54846C0.584332 4.20288 0.423918 3.80346 0.362896 3.38341C0.301875 2.96335 0.342008 2.5348 0.479959 2.13337L2.17329 3.82671L2.52663 3.47337L3.47329 2.52671L3.82663 2.17337L2.13329 0.480041C2.53471 0.34209 2.96327 0.301956 3.38332 0.362978C3.80338 0.424 4.2028 0.584414 4.54838 0.830882C4.89395 1.07735 5.1757 1.40275 5.3702 1.78003C5.5647 2.15732 5.66632 2.57558 5.66663 3.00004C5.66306 3.22572 5.62943 3.44992 5.56663 3.66671L13.4733 11.5867C13.5975 11.7116 13.6672 11.8806 13.6672 12.0567C13.6672 12.2328 13.5975 12.4018 13.4733 12.5267ZM0.526625 11.5867C0.402458 11.7116 0.332764 11.8806 0.332764 12.0567C0.332764 12.2328 0.402458 12.4018 0.526625 12.5267L1.47329 13.4734C1.5982 13.5975 1.76717 13.6672 1.94329 13.6672C2.11942 13.6672 2.28838 13.5975 2.41329 13.4734L6.05996 9.83337L4.17329 7.94671L0.526625 11.5867ZM12.3333 0.333374L9.66663 1.66671V3.00004L8.21996 4.44671L9.55329 5.78004L11 4.33337H12.3333L13.6666 1.66671L12.3333 0.333374Z"
                                      fill="#6F6F6F"
                                    />
                                  </svg>
                                </Box>
                                我的方案
                                <Box
                                  borderRadius={4}
                                  border={`1px solid ${theme.black.black500}`}
                                  width={42}
                                  height={24}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  marginLeft="8px"
                                  style={{ backgroundColor: theme.black.white }}
                                >
                                  <Typography variant="caption1">
                                    PRO
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                            <SWAPSpace size="xs" />
                            <Line />
                            <SWAPSpace size="xs" />
                            <MenuItem width={200}>常見問與答</MenuItem>
                            <MenuItem width={200}>功能導覽</MenuItem>
                            <MenuItem
                              width={200}
                              onClick={() => {
                                setLandingPage(true);
                                setAnchorEl(null);
                              }}
                            >
                              回到 SWAP 官網
                            </MenuItem>
                            <SWAPSpace size="xs" />
                            <Line />
                            <SWAPSpace size="xs" />
                            <MenuItem
                              width={200}
                              hoverBackgroundColor={theme.danger.danger50}
                              hoverIconColor={theme.danger.danger800}
                              onClick={() => {
                                setLandingPage(true);
                                setLogin(false);
                                setAnchorEl(null);
                              }}
                            >
                              <Box display="flex" alignContent="center">
                                <Box
                                  marginRight="9px"
                                  display="flex"
                                  alignSelf="center"
                                >
                                  <PowerSettingsNewIcon
                                    fontSize="small"
                                    style={{
                                      color: theme.danger.danger800,
                                      width: 16,
                                      height: 16,
                                    }}
                                  />
                                </Box>
                                <Typography
                                  variant="subtitle"
                                  color="danger800"
                                >
                                  登出
                                </Typography>
                              </Box>
                            </MenuItem>
                          </Menu>
                        ) : (
                          // Mobile
                          <Modal
                            open={Boolean(anchorEl)}
                            title={<SWAPLogo />}
                            onClose={handleClose}
                            mobile
                            bodyPadding="0px"
                          >
                            <Box>
                              <SWAPSpace size="xs" />
                              <MenuItem height={36} width="100%">
                                帳戶總覽
                              </MenuItem>
                              <SWAPSpace size="xs" />
                              <Line />
                              <SWAPSpace size="xs" />
                              <MenuItem height={36} width="100%" disabled>
                                <Typography variant="caption1">
                                  個人首頁
                                </Typography>
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                <Box display="flex" alignContent="center">
                                  <Box
                                    marginRight="9px"
                                    display="flex"
                                    alignSelf="center"
                                  >
                                    <svg
                                      width="14.66"
                                      height="14.66"
                                      viewBox="0 0 14.66 14.66"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.99992 11.8C5.33325 11.8 3.85992 10.9466 2.99992 9.66665C3.01992 8.33331 5.66659 7.59998 6.99992 7.59998C8.33325 7.59998 10.9799 8.33331 10.9999 9.66665C10.1399 10.9466 8.66659 11.8 6.99992 11.8ZM6.99992 2.33331C7.53035 2.33331 8.03906 2.54403 8.41413 2.9191C8.78921 3.29417 8.99992 3.80288 8.99992 4.33331C8.99992 4.86375 8.78921 5.37245 8.41413 5.74753C8.03906 6.1226 7.53035 6.33331 6.99992 6.33331C6.46949 6.33331 5.96078 6.1226 5.5857 5.74753C5.21063 5.37245 4.99992 4.86375 4.99992 4.33331C4.99992 3.80288 5.21063 3.29417 5.5857 2.9191C5.96078 2.54403 6.46949 2.33331 6.99992 2.33331ZM6.99992 0.333313C6.12444 0.333313 5.25753 0.505751 4.4487 0.840783C3.63986 1.17581 2.90493 1.66688 2.28587 2.28593C1.03563 3.53618 0.333252 5.23187 0.333252 6.99998C0.333252 8.76809 1.03563 10.4638 2.28587 11.714C2.90493 12.3331 3.63986 12.8241 4.4487 13.1592C5.25753 13.4942 6.12444 13.6666 6.99992 13.6666C8.76803 13.6666 10.4637 12.9643 11.714 11.714C12.9642 10.4638 13.6666 8.76809 13.6666 6.99998C13.6666 3.31331 10.6666 0.333313 6.99992 0.333313Z"
                                        fill="#6F6F6F"
                                      />
                                    </svg>
                                  </Box>
                                  帳戶設定
                                </Box>
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                <Box display="flex" alignContent="center">
                                  <Box
                                    marginRight="9px"
                                    display="flex"
                                    alignSelf="center"
                                  >
                                    <svg
                                      width="16"
                                      height="12"
                                      viewBox="0 0 16 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.3333 3.33335H1.66659V2.00002H12.3333V3.33335ZM12.3333 10H1.66659V6.00002H12.3333V10ZM12.3333 0.666687H1.66659C0.926585 0.666687 0.333252 1.26002 0.333252 2.00002V10C0.333252 10.3536 0.473728 10.6928 0.723776 10.9428C0.973825 11.1929 1.31296 11.3334 1.66659 11.3334H12.3333C12.6869 11.3334 13.026 11.1929 13.2761 10.9428C13.5261 10.6928 13.6666 10.3536 13.6666 10V2.00002C13.6666 1.26002 13.0666 0.666687 12.3333 0.666687Z"
                                        fill="#6F6F6F"
                                      />
                                    </svg>
                                  </Box>
                                  付款紀錄
                                </Box>
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                <Box display="flex" alignContent="center">
                                  <Box
                                    marginRight="9px"
                                    display="flex"
                                    alignSelf="center"
                                  >
                                    <svg
                                      width="16"
                                      height="12"
                                      viewBox="0 0 16 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.66671 0.666626C1.31309 0.666626 0.973947 0.807102 0.723898 1.05715C0.47385 1.3072 0.333374 1.64634 0.333374 1.99996V4.66663C1.07337 4.66663 1.66671 5.26663 1.66671 5.99996C1.66671 6.35358 1.52623 6.69272 1.27618 6.94277C1.02613 7.19282 0.686996 7.33329 0.333374 7.33329V9.99996C0.333374 10.3536 0.47385 10.6927 0.723898 10.9428C0.973947 11.1928 1.31309 11.3333 1.66671 11.3333H12.3334C12.687 11.3333 13.0261 11.1928 13.2762 10.9428C13.5262 10.6927 13.6667 10.3536 13.6667 9.99996V7.33329C13.3131 7.33329 12.9739 7.19282 12.7239 6.94277C12.4739 6.69272 12.3334 6.35358 12.3334 5.99996C12.3334 5.25996 12.9334 4.66663 13.6667 4.66663V1.99996C13.6667 1.25996 13.0667 0.666626 12.3334 0.666626H1.66671ZM9.33337 2.66663L10.3334 3.66663L4.66671 9.33329L3.66671 8.33329L9.33337 2.66663ZM4.87337 2.69329C5.52671 2.69329 6.05337 3.21996 6.05337 3.87329C6.05337 4.18625 5.92905 4.48639 5.70776 4.70768C5.48647 4.92897 5.18633 5.05329 4.87337 5.05329C4.22004 5.05329 3.69337 4.52663 3.69337 3.87329C3.69337 3.56034 3.8177 3.2602 4.03899 3.03891C4.26028 2.81761 4.56042 2.69329 4.87337 2.69329ZM9.12671 6.94663C9.78004 6.94663 10.3067 7.47329 10.3067 8.12663C10.3067 8.43958 10.1824 8.73972 9.96109 8.96101C9.7398 9.18231 9.43966 9.30662 9.12671 9.30662C8.47337 9.30662 7.94671 8.77996 7.94671 8.12663C7.94671 7.81367 8.07103 7.51353 8.29232 7.29224C8.51361 7.07095 8.81375 6.94663 9.12671 6.94663Z"
                                        fill="#6F6F6F"
                                      />
                                    </svg>
                                  </Box>
                                  我的優惠券
                                </Box>
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                <Box display="flex" alignItems="center">
                                  <Box
                                    marginRight="9px"
                                    display="flex"
                                    alignSelf="center"
                                  >
                                    <svg
                                      width="14.66"
                                      height="14.66"
                                      viewBox="0 0 14.66 14.66"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13.4733 12.5267L12.5266 13.4734C12.4017 13.5975 12.2327 13.6672 12.0566 13.6672C11.8805 13.6672 11.7115 13.5975 11.5866 13.4734L3.66663 5.56671C3.44983 5.62951 3.22564 5.66314 2.99996 5.66671C2.57549 5.6664 2.15723 5.56478 1.77995 5.37028C1.40267 5.17579 1.07727 4.89404 0.8308 4.54846C0.584332 4.20288 0.423918 3.80346 0.362896 3.38341C0.301875 2.96335 0.342008 2.5348 0.479959 2.13337L2.17329 3.82671L2.52663 3.47337L3.47329 2.52671L3.82663 2.17337L2.13329 0.480041C2.53471 0.34209 2.96327 0.301956 3.38332 0.362978C3.80338 0.424 4.2028 0.584414 4.54838 0.830882C4.89395 1.07735 5.1757 1.40275 5.3702 1.78003C5.5647 2.15732 5.66632 2.57558 5.66663 3.00004C5.66306 3.22572 5.62943 3.44992 5.56663 3.66671L13.4733 11.5867C13.5975 11.7116 13.6672 11.8806 13.6672 12.0567C13.6672 12.2328 13.5975 12.4018 13.4733 12.5267ZM0.526625 11.5867C0.402458 11.7116 0.332764 11.8806 0.332764 12.0567C0.332764 12.2328 0.402458 12.4018 0.526625 12.5267L1.47329 13.4734C1.5982 13.5975 1.76717 13.6672 1.94329 13.6672C2.11942 13.6672 2.28838 13.5975 2.41329 13.4734L6.05996 9.83337L4.17329 7.94671L0.526625 11.5867ZM12.3333 0.333374L9.66663 1.66671V3.00004L8.21996 4.44671L9.55329 5.78004L11 4.33337H12.3333L13.6666 1.66671L12.3333 0.333374Z"
                                        fill="#6F6F6F"
                                      />
                                    </svg>
                                  </Box>
                                  我的方案
                                  <Box
                                    borderRadius={4}
                                    border={`1px solid ${theme.black.black500}`}
                                    width={42}
                                    height={24}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    marginLeft="8px"
                                    style={{
                                      backgroundColor: theme.black.white,
                                    }}
                                  >
                                    <Typography variant="caption1">
                                      PRO
                                    </Typography>
                                  </Box>
                                </Box>
                              </MenuItem>
                              <SWAPSpace size="xs" />
                              <Line />
                              <SWAPSpace size="xs" />
                              <MenuItem height={36} width="100%">
                                常見問與答
                              </MenuItem>
                              <MenuItem height={36} width="100%">
                                功能導覽
                              </MenuItem>
                              <MenuItem
                                height={36}
                                width="100%"
                                onClick={() => {
                                  setLandingPage(true);
                                  setAnchorEl(null);
                                }}
                              >
                                回到 SWAP 官網
                              </MenuItem>
                              <SWAPSpace size="xs" />
                              <Line />
                              <SWAPSpace size="xs" />
                              <MenuItem
                                height={36}
                                width="100%"
                                hoverBackgroundColor={theme.danger.danger50}
                                hoverIconColor={theme.danger.danger800}
                                rippleColor={theme.danger.danger800}
                                onClick={() => {
                                  setLandingPage(true);
                                  setLogin(false);
                                  setAnchorEl(null);
                                }}
                              >
                                <Box display="flex" alignContent="center">
                                  <Box
                                    marginRight="9px"
                                    display="flex"
                                    alignSelf="center"
                                  >
                                    <PowerSettingsNewIcon
                                      fontSize="small"
                                      style={{
                                        color: theme.danger.danger800,
                                        width: 16,
                                        height: 16,
                                      }}
                                    />
                                  </Box>
                                  <Typography
                                    variant="subtitle"
                                    color="danger800"
                                  >
                                    登出
                                  </Typography>
                                </Box>
                              </MenuItem>
                              <SWAPSpace size="xs" />
                            </Box>
                          </Modal>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </Container>
            </Box>
          </Toolbar>
        </MaterialAppBar>
      </AppBarWrap>
    </div>
  );
};

const AppBarWrap = styled.div``;

export default AppBar;
