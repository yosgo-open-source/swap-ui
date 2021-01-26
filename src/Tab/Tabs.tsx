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
    root: {
      //SWAPTheme調整
    },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <TabWrap>
        <MaterialTabs
          className={classes.root}
          style={style}
          centered={centered}
          value={value}
          onChange={onChange}
          variant={variant}
          indicatorColor="primary"
        >
          {children}
        </MaterialTabs>
      </TabWrap>
    </SWAPTheme>
  );
};

const TabWrap = styled.div``;

export default Tabs;
