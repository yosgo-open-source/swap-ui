import * as React from "react";
import MuiAutocomplete from "@mui/material/Autocomplete";
import type { AutocompleteCloseReason } from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { swapColors as c, swapShadows } from "../theme/tokens";
import Typography from "./Typography";
import type { AutoCompleteProps } from "./AutoComplete.types";
import { cssSize } from "../utils/cssSize";

const checkSvg = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.4998 5.83345L7.49984 15.8334L2.9165 11.2501L4.0915 10.0751L7.49984 13.4751L16.3248 4.65845L17.4998 5.83345Z"
      fill="#4862CC"
    />
  </svg>
);

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  // v1 在 renderInput 內用 useEffect 記錄輸入值（React 違規）；v2 改為正常 state 追蹤
  const [inputValue, setInputValue] = React.useState("");
  const {
    open = false,
    helperText,
    value,
    handleNoOptionsValueChange,
    options = [],
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
    addNewOptionsText,
    ...other
  } = props;

  return (
    <div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement ?? "bottom-start"}
        sx={{
          border: `1px solid ${c.black.black500}`,
          boxShadow: swapShadows.m,
          borderRadius: "8px",
          width: cssSize(width) ?? 320,
          zIndex: 1301,
          fontSize: 13,
          color: "#586069",
          backgroundColor: "#fff",
          marginTop: `${anchorOrigin?.vertical ?? -65}px !important`,
          marginLeft: `${anchorOrigin?.horizontal ?? 0}px !important`,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ padding: "16px 16px 8px 16px", fontWeight: 600 }}>
          <Typography variant="caption1" color="black800">
            {title}
          </Typography>
        </Box>
        <MuiAutocomplete
          // listbox 需留在面板內（v1 行為）：不 disablePortal 會被 portal 到 body，
          // 跑出外框且與已選面板重疊（使用者回報的兩個問題同根因）
          disablePortal
          {...other}
          open
          options={options}
          renderOption={renderOption}
          getOptionLabel={getOptionLabel}
          onInputChange={(_, v) => setInputValue(v)}
          slotProps={{
            paper: {
              sx: {
                boxShadow: "none",
                margin: 0,
                color: "#586069",
                fontSize: 13,
                border: "none",
                paddingRight: "5px",
              },
            },
            listbox: {
              sx: {
                maxHeight: cssSize(optionsMaxHeight),
                "& .MuiAutocomplete-option": {
                  fontSize: 14,
                  fontWeight: 700,
                  minHeight: "auto",
                  alignItems: "flex-start",
                  padding: "8px 16px",
                  color: "#000",
                  '&[aria-selected="true"]': { display: "none" },
                  "&.Mui-focused": {
                    backgroundColor: c.primary.primary50,
                    color: c.primary.primary800,
                  },
                },
                "&::-webkit-scrollbar": { backgroundColor: "transparent", width: 5 },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: c.black.black600,
                  borderRadius: "100px",
                },
                "&::-webkit-scrollbar-track-piece:start": { marginTop: "12px" },
                "&::-webkit-scrollbar-track-piece:end": { marginBottom: "12px" },
              },
            },
            // popper.js 會寫入 inline 的 absolute/transform，需 !important 拉回文流，
            // 讓清單留在面板內、排在已選面板下方
            popper: {
              sx: {
                position: "static !important",
                transform: "none !important",
                width: "100% !important",
              },
            },
          }}
          noOptionsText={
            disableFreeInput ? (
              "無此選項"
            ) : (
              <Box
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {noOptionsText ?? "無此選項"}
                <Box
                  sx={{
                    color: c.primary.primary400,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  onMouseDown={() => handleNoOptionsValueChange?.(inputValue)}
                >
                  {addNewOptionsText ?? "使用"} 「{inputValue}」
                </Box>
              </Box>
            )
          }
          renderInput={
            renderInput ??
            ((params) => (
              <>
                <InputBase
                  placeholder={placeholder}
                  ref={params.slotProps.input.ref}
                  inputProps={params.slotProps.htmlInput}
                  autoFocus
                  sx={{
                    padding: "0 16px 16px 16px",
                    width: "100%",
                    borderBottom: "1px solid #dfe2e5",
                    "& input": {
                      height: 16,
                      borderRadius: "8px",
                      backgroundColor: c.black.white,
                      padding: "13px 16px",
                      border: "1px solid #ced4da",
                      fontSize: 14,
                      "&:focus": {
                        boxShadow: `${alpha(c.primary.primary400, 0.25)} 0 0 0 0.2rem`,
                        borderColor: c.primary.primary400,
                      },
                    },
                  }}
                />
                {value ? (
                  <Box
                    sx={{
                      minHeight: 52,
                      padding: "16px 16px",
                      display: "grid",
                      gap: "10px",
                      alignItems: "center",
                      gridTemplateColumns: "auto 20px",
                      backgroundColor: "transparent",
                      color: c.primary.primary400,
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      boxShadow: "inset 0px -1px 0px #ECECEC",
                    }}
                  >
                    {value}
                    {checkSvg}
                  </Box>
                ) : null}
              </>
            ))
          }
        />
      </Popper>
    </div>
  );
};

export type { AutocompleteCloseReason };

export default AutoComplete;
