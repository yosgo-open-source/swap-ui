import MaterialTabs from "@material-ui/core/Tabs";

import React from "react";
import styled from "styled-components";
import { TabsProps } from "./Tabs.types";
import { makeStyles } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const Tabs: React.FC<TabsProps> = ({
  children,
  style,
  centered,
  value,
  onChange,
  variant,
}) => {
  const useStyles = makeStyles({
    root: {},
    indicatorRoot: {
      backgroundColor: "transparent",
      // animation: "$slideDown 5s ",
      // width: "20px !important",
      // position: "absolute",
      // backgroundColor: "red",
      // transition: "width 3s",
    },
    // "@keyframes slideDown": {
    //   from: { backgroundColor: "red" },
    //   to: { backgroundColor: "green" },
    // },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <TabWrap>
        <MaterialTabs
          classes={{
            root: classes.root,
            indicator: classes.indicatorRoot,
          }}
          style={style}
          centered={centered}
          value={value}
          onChange={onChange}
          variant={variant}
        >
          {children}
        </MaterialTabs>
      </TabWrap>
    </SWAPTheme>
  );
};

const TabWrap = styled.div``;

export default Tabs;
