import { fade, InputBase, makeStyles, Popper, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import { MyAutoCompleteProps } from "./AutoComplete.types";
import { useState } from "react";
import Typography from "../Typography/Typography";
import MaterialAutocomplete, {
  AutocompleteCloseReason,
} from "@material-ui/lab/Autocomplete";

// Style
interface StyleProps {
  width: string | number;
  optionsMaxHeight: string | number;
  marginTop: string | number;
  marginLeft: string | number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  popper: (props) => ({
    border: "1px solid #CCCCCC",
    boxShadow: " 0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    width: props.width ? props.width : 320,
    zIndex: 1301,
    fontSize: 13,
    color: "#586069",
    backgroundColor: "#fff",
    marginTop: props.marginTop,
    marginLeft: props.marginLeft,
    boxSizing: "border-box",
  }),
  header: {
    padding: "16px 16px 8px 16px",
    fontWeight: 600,
  },
  inputBase: {
    padding: "0 16px 16px 16px",
    width: "100%",
    borderBottom: "1px solid #dfe2e5",
    "& input": {
      height: 16,
      borderRadius: 8,
      backgroundColor: theme.palette.common.white,
      padding: "13px 16px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      border: "1px solid #ced4da",
      fontSize: 14,
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: "none",
    margin: 0,
    color: "#586069",
    fontSize: 13,
    border: "none",
    paddingRight: 5,
  },
  option: {
    fontSize: 14,
    fontWeight: 700,
    minHeight: "auto",
    alignItems: "flex-start",
    padding: "8px 16px",
    color: "#000",
    '&[aria-selected="true"]': {
      display: "none",
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.primary.primary50,
      color: theme.primary.primary800,
    },
  },
  listbox: (props) => ({
    maxHeight: props.optionsMaxHeight,
    "&::-webkit-scrollbar": {
      backgroundColor: "transparent",
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.black.black600,
      borderRadius: 100,
    },
    "&::-webkit-scrollbar-track-piece:start": {
      marginTop: 12,
    },
    "&::-webkit-scrollbar-track-piece:end": {
      marginBottom: 12,
    },
  }),
  popperDisablePortal: {
    position: "relative",
  },
  iconSelected: {
    width: 17,
    height: 17,
    marginRight: 5,
    marginLeft: -2,
  },
  color: {
    width: 14,
    height: 14,
    flexShrink: 0,
    marginRight: 8,
    marginTop: 2,
  },
  text: {
    flexGrow: 1,
    fontSize: 14,
    fontWeight: 700,
  },
  close: {
    opacity: 0.6,
    width: 18,
    height: 18,
  },
  selected: {
    minHeight: 52,
    padding: "16px 16px",
    display: "grid",
    gap: 10,
    alignItems: "center",
    gridTemplateColumns: "auto 20px",
    backgroundColor: "transparent",
    color: theme.primary.primary400,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.4,
    boxShadow: "inset 0px -1px 0px #ECECEC",
  },
  noOptionValue: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  linkText: {
    color: theme.primary.primary400,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const AutoComplete: React.FC<MyAutoCompleteProps> = (
  props
): React.ReactElement => {
  const [noOptionValue, setNoOptionValue] = useState<any>([]);
  const [typeNoOptionValue, setTypeNoOptionValue] = useState(false);
  const {
    open,
    helperText,
    value,
    handleNoOptionsValueChange,
    options,
    placeholder,
    placement,
    title,
    width,
    anchorEl,
    disableFreeInput,
    renderOption,
    getOptionLabel,
    noOptionsText,
    renderInput,
    optionsMaxHeight,
    anchorOrigin,
    ...other
  } = props;
  const styleProps: StyleProps = {
    width: width,
    optionsMaxHeight: optionsMaxHeight,
    marginTop: anchorOrigin ? anchorOrigin.vertical : -65,
    marginLeft: anchorOrigin ? anchorOrigin.horizontal : -0,
  };

  const classes = useStyles(styleProps);
  const id = open ? "simple" : undefined;
  return (
    <div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <div className={classes.header}>
          <Typography variant="caption1" color="black800">
            {title}
          </Typography>
        </div>
        <MaterialAutocomplete
          {...other}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
            listbox: classes.listbox,
          }}
          open
          options={options}
          renderOption={renderOption}
          getOptionLabel={getOptionLabel}
          noOptionsText={
            disableFreeInput ? (
              "無此選項"
            ) : noOptionsText ? (
              noOptionsText
            ) : (
              <div className={classes.noOptionValue}>
                無此選項
                <div
                  className={classes.linkText}
                  onMouseDown={() => {
                    handleNoOptionsValueChange(noOptionValue.value);
                  }}
                >
                  使用 「{noOptionValue.value}」
                </div>
              </div>
            )
          }
          renderInput={
            renderInput
              ? renderInput
              : (params) => {
                  useEffect(() => {
                    setNoOptionValue(params.inputProps);
                  }, [typeNoOptionValue]);
                  return (
                    <>
                      <InputBase
                        placeholder={placeholder}
                        ref={params.InputProps.ref}
                        inputProps={params.inputProps}
                        autoFocus
                        onChange={() =>
                          setTypeNoOptionValue(!typeNoOptionValue)
                        }
                        className={classes.inputBase}
                      />
                      {value.length > 0 ? (
                        <div className={classes.selected}>
                          {value}
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.4998 5.83345L7.49984 15.8334L2.9165 11.2501L4.0915 10.0751L7.49984 13.4751L16.3248 4.65845L17.4998 5.83345Z"
                              fill="#4862CC"
                            />
                          </svg>
                        </div>
                      ) : null}
                    </>
                  );
                }
          }
        />
      </Popper>
    </div>
  );
};
export { AutocompleteCloseReason };

export default AutoComplete;
