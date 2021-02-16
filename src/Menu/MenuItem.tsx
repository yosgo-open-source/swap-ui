import MaterialMenuItem from "@material-ui/core/MenuItem";
import React from "react";
import styled from "styled-components";
import { MenuItemProps } from "./MenuItem.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import { makeStyles, Theme } from "@material-ui/core";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  style,
  key,
  value,
  onClick,
  disabled,
  width,
  hoverBackgroundColor,
  hoverFontColor,
  hoverIconColor,
  height,
  rippleColor,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      fontSize: 14,
      fontWeight: 700,
      width: width,
      minHeight: height,
      "&.Mui-focused": {
        backgroundColor: "red",
      },
      "&:hover": {
        backgroundColor: hoverBackgroundColor
          ? hoverBackgroundColor
          : theme.primary.primary50,
        color: hoverFontColor ? hoverFontColor : theme.primary.primary800,
        "& svg": {
          "& path": {
            fill: hoverIconColor ? hoverIconColor : theme.primary.primary800,
          },
        },
      },
      "& span": {
        color: rippleColor,
      },
    },
  }));
  const classes = useStyles();
  return (
    <SWAPTheme>
      <MenuItemWrap>
        <MaterialMenuItem
          className={classes.root}
          style={style}
          key={key}
          value={value}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </MaterialMenuItem>
      </MenuItemWrap>
    </SWAPTheme>
  );
};

const MenuItemWrap = styled.div``;

export default MenuItem;
