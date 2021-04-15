import MaterialMenu from "@material-ui/core/Menu";
import React from "react";
import { MyMenuProps } from "./Menu.types";

const Menu: React.FC<MyMenuProps> = (props) => {
  const { children, open, ...other } = props;
  return (
    <MaterialMenu open={open} {...other}>
      {children}
    </MaterialMenu>
  );
};

export default Menu;
