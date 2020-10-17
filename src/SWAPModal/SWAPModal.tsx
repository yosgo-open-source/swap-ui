// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";
import {
  Container,
  Modal,
  Grid,
  Typography,
  Paper,
  IconButton,
  Divider,
  Button,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import { SWAPModalProps } from "./SWAPModal.types";
import Space from "../Space/Space";

const SWAPModal: React.FC<SWAPModalProps> = ({
  open,
  title,
  onClose,
  helpText,
}) => {
  return (
    <div>
      <Modal open={open}>
        <SWAPModalWrap>
          <Paper className="modal_inner">
            <Container maxWidth="lg">
              <Space />
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                spacing={3}
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="h5">{title}</Typography>
                  {helpText ? (
                    <Typography variant="body2" color="textSecondary">
                      {helpText}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item>
                  <IconButton onClick={() => onClose()}>
                    <CloseIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
              <Space />
            </Container>
            <Divider />
            <div className="modal_inner_body">
              <Container maxWidth="lg">
                <Space size="medium" />
                Body
                <Space size="medium" />
              </Container>
            </div>
            <Divider />
            <Container maxWidth="lg">
              <Space />
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                spacing={1}
                justify="flex-end"
              >
                <Grid item>
                  <Button variant="outlined" size="large">
                    返回
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" size="large" color="primary">
                    確認操作
                  </Button>
                </Grid>
              </Grid>
              <Space />
            </Container>
          </Paper>
        </SWAPModalWrap>
      </Modal>
    </div>
  );
};

const SWAPModalWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal_inner {
    width: 56vw;
    .modal_inner_body {
    }
  }
  @media screen and (max-width: 960px) 
    .modal_inner {
      width: 95vw;
    }
  }
`;

export default SWAPModal;
