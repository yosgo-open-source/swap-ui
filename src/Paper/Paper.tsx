import { makeStyles, Theme, useMediaQuery } from "@material-ui/core";
import MaterialPaper from "@material-ui/core/Paper";
import React from "react";
import { MyPaperProps } from "./Paper.types";

// Style
interface StyleProps {
  width: string | number;
  height: string | number;
  matchSM: boolean;
  matchXS: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    boxShadow: theme.boxShadow.xl,
    borderRadius: 12,
    border: `1px solid ${theme.black.black500}`,
    width: props.width,
    height: props.height,
    padding: props.matchSM ? 40 : props.matchXS ? 24 : 16,
  }),
}));

const Paper: React.FC<MyPaperProps> = (props): React.ReactElement => {
  const { height, width, ...other } = props;
  const matchSM = useMediaQuery("(min-width:576px)");
  const matchXS = useMediaQuery("(min-width:375px)");
  const styleProps: StyleProps = {
    height: height ? height : "100%",
    width: width ? width : "100%",
    matchSM: matchSM,
    matchXS: matchXS,
  };
  const classes = useStyles(styleProps);

  return (
    <MaterialPaper
      variant="outlined"
      classes={{
        root: classes.root,
      }}
      {...other}
    />
  );
};

export default Paper;
