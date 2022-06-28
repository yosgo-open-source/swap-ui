import MaterialTabs from "@material-ui/core/Tabs";
import React, { useEffect, useRef } from "react";
import { SegmentedTabsProps } from "./SegmentedTabs.types";
import { makeStyles, Theme } from "@material-ui/core";

// Style
interface StyleProps {
  width: number | string;
  slide: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: props.width,
    boxSizing: "border-box",
    border: "1px solid #cccccc",
    borderRadius: "9px",
    padding: "4px 0",
    "& button": {
      borderRadius: "8px",
      margin: "0 4px",
      "&.Mui-selected": {
        backgroundColor: props.slide ? "unset" : theme.primary.primary50,
        color: theme.primary.primary500,
      },
    },
  }),
  indicator: (props) => ({
    borderRadius: "8px",
    height: props.slide ? "100%" : 0,
    backgroundColor: theme.primary.primary50,
  }),
  scrollButtons: {
    width: 32,
    overflow: "hidden",
    "&.Mui-disabled": {
      width: 4,
    },
  },
}));

const SegmentedTabs: React.FC<SegmentedTabsProps> = ({
  children,
  width,
  slide,
  ...other
}) => {
  const styleProps: StyleProps = {
    width: width,
    slide: slide,
  };
  const classes = useStyles(styleProps);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (
      tabsRef &&
      tabsRef.current &&
      other.variant &&
      other.variant === "scrollable"
    ) {
      //確保 scrollable tabs 的 selected tab 能夠顯示出來
      const el: any = tabsRef.current.querySelectorAll(
        ".MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected"
      )[0];
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }, 1000);
      }
    }
  }, []);

  return (
    <MaterialTabs
      {...other}
      classes={{
        root: classes.root,
        indicator: classes.indicator,
        scrollButtons: classes.scrollButtons,
      }}
      indicatorColor="primary"
      ref={tabsRef}
    >
      {children}
    </MaterialTabs>
  );
};

export default SegmentedTabs;
