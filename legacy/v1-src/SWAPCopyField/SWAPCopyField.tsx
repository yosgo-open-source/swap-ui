import React, { useState } from "react";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Fade, Grid, TextField } from "@material-ui/core";

import FileCopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/Check";

import { SWAPCopyFieldProps } from "./SWAPCopyField.types";

const SWAPCopyField: React.FC<SWAPCopyFieldProps> = ({
  sharedText,
  rows,
  multiline,
  copyInputLabel = "複製以下文字訊息",
  copyButtonText = "複製",
  copySuccessMessage = "已成功複製文字訊息",
}) => {
  const [csm, setCsm] = useState("");

  return (
    <div>
      <SWAPCopyFieldWrap>
        <TextField
          fullWidth
          multiline={multiline}
          rows={rows}
          label={copyInputLabel}
          value={sharedText}
          variant="outlined"
          helperText={
            csm && csm.length > 0 ? (
              <Fade in>
                <Grid container alignItems="center" spacing={1} wrap="nowrap">
                  <Grid item>
                    <CheckIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>{csm}</Grid>
                </Grid>
              </Fade>
            ) : null
          }
          InputProps={{
            endAdornment: (
              <div className="cpy_btn_element">
                <CopyToClipboard
                  text={sharedText}
                  onCopy={() => {
                    setCsm("");
                    setTimeout(() => setCsm(copySuccessMessage), 200);
                  }}
                >
                  <div>
                    <Button
                      startIcon={
                        <FileCopyIcon color="primary" fontSize="small" />
                      }
                      style={{ width: "auto" }}
                    >
                      <small>{copyButtonText}</small>
                    </Button>
                  </div>
                </CopyToClipboard>
              </div>
            ),
          }}
        />
      </SWAPCopyFieldWrap>
    </div>
  );
};

const SWAPCopyFieldWrap = styled.div`
  .cpy_btn_element {
    width: auto;
    min-width: 72px;
    text-align: right;
  }
`;

export default SWAPCopyField;
