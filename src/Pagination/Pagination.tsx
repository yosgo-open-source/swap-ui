import MaterialPagination from "@material-ui/lab/Pagination";
import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { MyPaginationProps } from "./Pagination.types";
import { PaginationItem } from "@material-ui/lab";

// Style
interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: () => ({}),
  ul: {
    "& li": {
      width: 24,
      margin: "0px 2px",
    },
  },
  itemRoot: {
    // textAlign: "unset",
    transition: "color 250ms ,background-color 250ms ",
  },
  rounded: () => ({
    minWidth: 24,
    width: 24,
    height: 24,
    borderRadius: 5,
    borderColor: theme.black.black500,
    color: theme.black.black800,
    padding: "4.5px 8.5px",
    fontSize: 11,
    fontWeight: 700,
    lineHeight: 1.4,
    margin: 0,
    "&:hover": {
      borderColor: theme.black.black800,
      backgroundColor: theme.black.white,
    },
  }),
  selected: () => ({
    "&.Mui-selected": {
      color: theme.black.white,
      backgroundColor: theme.primary.primary400,
      border: "none",
      boxShadow: theme.boxShadow.s,
      "&:hover": {
        border: "none",
        backgroundColor: theme.primary.primary400,
      },
    },
  }),
  ellipsis: {
    minWidth: 24,
    width: 24,
    height: 24,
    borderRadius: 5,
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.black.black500}`,
  },
}));

const Pagination: React.FC<MyPaginationProps> = (props): React.ReactElement => {
  // const theme = useTheme();
  const { ...other } = props;
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);
  return (
    <MaterialPagination
      classes={{ root: classes.root, ul: classes.ul }}
      shape="rounded"
      variant="outlined"
      {...other}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          classes={{
            root: classes.itemRoot,
            rounded: classes.rounded,
            selected: classes.selected,
            ellipsis: classes.ellipsis,
          }}
        />
      )}
    />
  );
};

export default Pagination;
