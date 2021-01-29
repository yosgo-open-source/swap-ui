import MaterialMenu from "@material-ui/core/Menu";
import React from "react";
import styled from "styled-components";
import { MenuProps } from "./Menu.types";
import { makeStyles, Theme } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const Menu: React.FC<MenuProps> = ({
  children,
  style,
  autoFocus,
  anchorOrigin,
  anchorPosition,
  open,
  anchorEl,
  onClose,
  keepMounted,
  getContentAnchorEl,
  onEnter,
  onEntered,
  onEntering,
  onExit,
  onExited,
  onExiting,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      //SWAPTheme調整
    },
  }));
  const classes = useStyles();
  return (
    <SWAPTheme>
      <MenuWrap>
        <MaterialMenu
          className={classes.root}
          style={style}
          open={open}
          anchorEl={anchorEl}
          keepMounted={keepMounted}
          onClose={onClose}
          anchorOrigin={anchorOrigin}
          anchorPosition={anchorPosition}
          getContentAnchorEl={getContentAnchorEl}
          autoFocus={autoFocus}
          onEnter={onEnter}
          onEntered={onEntered}
          onEntering={onEntering}
          onExit={onExit}
          onExited={onExited}
          onExiting={onExiting}
        >
          {children}
        </MaterialMenu>
      </MenuWrap>
    </SWAPTheme>
  );
};

const MenuWrap = styled.div``;

export default Menu;
