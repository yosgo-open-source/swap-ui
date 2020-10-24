import {
  Container,
  Dialog,
  Divider,
  Fade,
  Paper,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

import { SWAPDialogProps } from "./SWAPDialog.types";

const SWAPDialog: React.FC<SWAPDialogProps> = ({
  open,
  title,
  helpText,
  children,
  primaryButton,
  secondaryButton,
  status,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        aria-describedby={`dialog_d_${title}`}
        aria-labelledby={`dialog_l_${title}`}
        id={`${title}`}
        PaperProps={{
          style: { maxWidth: "auto", margin: "6px" },
        }}
      >
        <Fade in={open}>
          <SWAPDialogWrap>
            <Paper className="dialog_inner" id="dialog_inner">
              <div className="dialog_inner_head">
                {status === "success" ? <div className="s_bar bar" /> : null}
                {status === "warning" ? <div className="w_bar bar" /> : null}
                {status === "critical" ? <div className="c_bar bar" /> : null}
                <Container maxWidth="lg">
                  <SWAPSpace size="small" />
                  <Typography variant="h5">{title}</Typography>
                  {helpText ? (
                    <Typography variant="body2">{helpText}</Typography>
                  ) : null}
                  <SWAPSpace size="small" />
                </Container>
                {children ? <Divider /> : null}
              </div>
              {children ? (
                <div className="dialog_inner_body">
                  <Container maxWidth="lg">
                    <SWAPSpace size="middle" />
                    <div>{children}</div>
                    <SWAPSpace size="middle" />
                  </Container>
                </div>
              ) : null}
              <div className="dialog_inner_footer">
                <Divider />
                <Container maxWidth="lg">
                  <SWAPSpace size="small" />
                  <Grid
                    container
                    wrap="nowrap"
                    alignItems="center"
                    spacing={3}
                    justify="flex-end"
                  >
                    <Grid item>
                      {secondaryButton &&
                      secondaryButton.title &&
                      secondaryButton.title.length > 0 ? (
                        <Button
                          size="large"
                          onClick={() => secondaryButton.onClick()}
                          disabled={secondaryButton.disabled}
                          color="default"
                        >
                          {secondaryButton.title}
                        </Button>
                      ) : null}
                    </Grid>
                    <Grid item>
                      <Button
                        size="large"
                        onClick={() => primaryButton.onClick()}
                        disabled={primaryButton.disabled}
                      >
                        {primaryButton.title}
                      </Button>
                    </Grid>
                  </Grid>
                  <SWAPSpace size="small" />
                </Container>
              </div>
            </Paper>
          </SWAPDialogWrap>
        </Fade>
      </Dialog>
    </div>
  );
};

const SWAPDialogWrap = styled.div`
  box-sizing: border-box;
  .bar {
    height: 15px;
    &.s_bar {
      background: #3f51b5;
    }
    &.w_bar {
      background: #ffb11b;
    }
    &.c_bar {
      background: rgb(220, 0, 78);
    }
  }
  .dialog_inner {
    box-sizing: border-box;
    width: 45vw;
  }
  @media screen and (max-width: 960px) {
    .dialog_inner {
      width: auto;
    }
  }
`;

export default SWAPDialog;
