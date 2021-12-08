import { Theme, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import { CardProps } from "./Card.types";

// Style
interface StyleProps {
  width?: number | string;
  height?: number | string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: props.width ? props.width : 350,
    height: props.height ? props.height : "100%",
    backgroundColor: theme.black.white,
    boxSizing: "border-box",
    border: `1px solid ${theme.black.black500}`,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  }),
  body: { padding: 24, width: "100%", height: "100%" },
  buttonblock: {
    width: "100%",
    boxShadow: `0px -1px 0px ${theme.black.black400}`,
    borderRadius: " 0px 0px 8px 8px",
    display: "flex",
    padding: 0,
  },
}));

const Card: React.FC<CardProps> = (props): React.ReactElement => {
  const {
    width,
    height,
    children,
    buttons,
    bodyStyle,
    loading,
    ...other
  } = props;
  const useStylesProps: StyleProps = { width: width, height: height };
  const classes = useStyles(useStylesProps);
  const theme = useTheme();
  return (
    <div className={classes.root} {...other}>
      <div className={classes.body} style={bodyStyle}>
        {!loading ? (
          children
        ) : (
          <div style={{ width: "100%", height: "100%" }}>
            <Skeleton width="40%" height="calc((100% - 16px) /3 )" />
            <SWAPSpace size={8} />
            <Skeleton width="100%" height="calc((100% - 16px) /3 )" />
            <SWAPSpace size={8} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: "calc((100% - 16px) /3 )",
              }}
            >
              <Skeleton width="26.4%" height="100%" />
              <Skeleton width="26.4%" height="100%" />
            </div>
          </div>
        )}
      </div>
      <div className={classes.buttonblock}>
        {!loading ? (
          buttons?.map((i, index) => (
            <Button
              key={Math.random().toString(36).substr(2)}
              fullWidth
              variant={i.variant ? i.variant : "black"}
              style={{
                borderRight:
                  index + 1 === buttons?.length
                    ? undefined
                    : `1px solid ${theme.black.black400}`,
                borderRadius: "0px 0px 0px 0px",
                ...i.style,
              }}
              onClick={i.onClick}
              disabled={i.disabled}
              loading={i.loading}
            >
              {i.title}
            </Button>
          ))
        ) : (
          <div style={{ padding: "16px 24px", width: "100%", height: 48 }}>
            <Skeleton width="100%" height="100%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
