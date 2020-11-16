import {
  Container,
  Fade,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

import { SWAPBannerProps } from "./SWAPBanner.types";

const ElementId = (title: string) => `swap_banner_${title}`;

const SWAPBanner: React.FC<SWAPBannerProps> = ({
  status,
  title,
  content,
  primaryButton,
  secondaryButton,
  focus,
}) => {
  useEffect(() => {
    if (focus) {
      /**畫面捲動到 appBanner 元件並顯目提示 */
      const banner = document.getElementById(ElementId(title));
      if (banner) {
        banner.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div>
      <SWAPBannerWrap>
        <Fade in timeout={{ enter: 300, exit: 300 }}>
          <Paper className="swap_banner">
            <div id={ElementId(title)} className="banner_anchor" />
            {status === "success" ? <div className="s_bar bar" /> : null}
            {status === "warning" ? <div className="w_bar bar" /> : null}
            {status === "critical" ? <div className="c_bar bar" /> : null}
            <Container maxWidth="lg">
              <SWAPSpace size="large" />
              <Typography variant="h6">{title}</Typography>
              <SWAPSpace size="small" />
              <Typography variant="body2">{content}</Typography>
              {primaryButton || secondaryButton ? (
                <Grid container spacing={1}>
                  {primaryButton &&
                  primaryButton.title &&
                  primaryButton.title.length > 0 ? (
                    <Grid item>
                      <SWAPSpace />
                      <Button
                        variant="outlined"
                        onClick={() => primaryButton.onClick()}
                        disabled={primaryButton.disabled}
                      >
                        {primaryButton.title}
                      </Button>
                    </Grid>
                  ) : null}
                  {secondaryButton &&
                  secondaryButton.title &&
                  secondaryButton.title.length > 0 ? (
                    <Grid item>
                      <SWAPSpace />
                      <Button
                        variant="text"
                        onClick={() => secondaryButton.onClick()}
                        disabled={secondaryButton.disabled}
                      >
                        {secondaryButton.title}
                      </Button>
                    </Grid>
                  ) : null}
                </Grid>
              ) : null}
              <SWAPSpace size="large" />
            </Container>
          </Paper>
        </Fade>
      </SWAPBannerWrap>
    </div>
  );
};

const SWAPBannerWrap = styled.div`
  .swap_banner {
    position: relative;
    overflow: hidden;
    .banner_anchor {
      position: absolute;
      top: -36px;
      left: 0;
      width: 0;
      height: 0;
    }
    .bar {
      height: 12px;
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
  }
`;

export default SWAPBanner;
