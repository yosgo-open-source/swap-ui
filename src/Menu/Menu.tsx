import MaterialMenu from "@material-ui/core/Menu";
import React from "react";
import { MenuProps } from "./Menu.types";
import { makeStyles, Theme } from "@material-ui/core";

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
  transformOrigin,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      //SWAPTheme調整
    },
  }));
  const classes = useStyles();
  return (
    <div>
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
        transformOrigin={transformOrigin}
      >
        {children}
      </MaterialMenu>
    </div>
  );
};

export default Menu;
