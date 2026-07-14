import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { MySkeletonProps } from "./Skeleton.types";
import MaterialSkeleton from "@material-ui/lab/Skeleton";

// Style
interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    backgroundColor: theme.black.black400,
    transform: "unset",
  }),
}));

const Skeleton: React.FC<MySkeletonProps> = (props): React.ReactElement => {
  const { ...other } = props;
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);
  return <MaterialSkeleton classes={{ root: classes.root }} {...other} />;
};

export default Skeleton;
