import React, { useEffect, useRef, useState } from "react";
import { CheckBoxListProps } from "./CheckBoxList.types";
import { makeStyles, Theme } from "@material-ui/core";
import CheckBox from "./CheckBox";
import Typography from "../Typography/Typography";
// Style
interface StyleProps {
  checked: boolean;
  width: string | number;
  height: string | number;
  multiline: boolean;
  line: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    width: props.width
      ? props.width
      : props.multiline
      ? 240
      : props.line
      ? 342
      : 327,
    height: props.height
      ? props.height
      : props.multiline
      ? 69
      : props.line
      ? 76
      : 54,
    padding: props.line ? "16px" : props.multiline ? "12px 16px" : "15px 16px",
    border: props.checked
      ? `1px solid ${theme.primary.primary400}`
      : `1px solid ${theme.black.black500}`,
    boxSizing: "border-box",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: props.checked ? theme.primary.primary50 : "white",
    "-webkit-tap-highlight-color": "transparent",
    "&:hover": {
      backgroundColor: props.checked
        ? theme.primary.primary50
        : theme.black.black100,
      border: props.checked
        ? `1px solid ${theme.primary.primary400}`
        : `1px solid ${theme.black.black600}`,
    },
  }),
}));

const CheckBoxList: React.FC<CheckBoxListProps> = (props) => {
  const {
    width,
    height,
    title,
    subtitle,
    multiline,
    checked,
    line,
    ...other
  } = props;
  const styleProps: StyleProps = {
    checked: checked,
    multiline: multiline,
    width: width,
    height: height,
    line: line,
  };
  const classes = useStyles(styleProps);
  const [lineHeight, setLineHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      if (ref.current.offsetHeight > 44) {
        setLineHeight(ref.current.offsetHeight);
      } else {
        setLineHeight(44);
      }
    }
  }, []);
  return (
    <div className={classes.root} {...other}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CheckBox
          disableHover
          checked={Boolean(checked)}
          style={{ marginLeft: 4 }}
        />
        {line ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: 4,
            }}
          >
            <Typography
              variant="title"
              style={{
                minWidth: 56,
                maxWidth: 56,
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {title}
            </Typography>
            <div
              style={{
                height: lineHeight,
                width: 1,
                margin: "0 12px",
                backgroundColor: "#909090",
              }}
            />
            <div ref={ref}>
              <Typography
                variant="body2_loose"
                color="black800"
                style={{
                  width: "100%",
                  wordBreak: "break-word",
                }}
              >
                {subtitle}
              </Typography>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="title">{title}</Typography>
            {multiline ? (
              <Typography variant="body2_loose" color="black800">
                {subtitle}
              </Typography>
            ) : null}
          </div>
        )}
      </div>
      {!multiline && !line ? (
        <Typography variant="body2_loose" color="black800">
          {subtitle}
        </Typography>
      ) : null}
    </div>
  );
};

export default CheckBoxList;
