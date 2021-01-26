import MaterialTabs from "@material-ui/core/Tabs";
import React from "react";
import styled from "styled-components";
import { SegmentedTabsProps } from "./SegmentedTabs.types";
import { makeStyles, useTheme } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  children,
  style,
  centered,
  value,
  onChange,
  variant,
}) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      //SWAPTheme調整

      padding: 4,
      border: "1px solid #cccccc",
      borderRadius: "9px",
      width: 274,
      "& button": {
        padding: "12px 16px 12px 16px",
        borderRadius: "8px",
        "&.Mui-selected": {
          backgroundColor: theme.primary.primary50,
          color: theme.primary.primary500,
        },
      },
      "& span": {
        height: 0,
      },
    },
  });
  const classes = useStyles();
  return (
    <SWAPTheme>
      <SegmentedTabsWrap>
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
      </SegmentedTabsWrap>
    </SWAPTheme>
  );
};

const SegmentedTabsWrap = styled.div``;

export default SegmentedTabs;
