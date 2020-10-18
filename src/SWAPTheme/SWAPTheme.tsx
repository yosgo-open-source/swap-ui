import React from "react";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { SWAPThemeProps } from "./SWAPTheme.types";
import { CreateCSSProperties, CSSProperties } from "@material-ui/styles";

const TypographyHeadShared:
  | CSSProperties
  | CreateCSSProperties<{}>
  | undefined = {
  fontWeight: "normal",
  color: "#121037",
  letterSpacing: "2.1px",
};
const TypographyBodyShared:
  | CSSProperties
  | CreateCSSProperties<{}>
  | undefined = {
  color: "rgba(33,33,33,1)",
  letterSpacing: "0.9px",
};

const SWAPTheme: React.FC<SWAPThemeProps> = ({ themeOptions, children }) => {
  const theme = themeOptions
    ? createMuiTheme(themeOptions)
    : createMuiTheme({
        typography: {
          fontFamily: [
            "Noto Sans TC",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        overrides: {
          MuiCard: {
            root: {
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.13)",
            },
          },
          MuiPaper: {
            rounded: {
              borderRadius: "15px",
            },
          },
          MuiTypography: {
            h1: TypographyHeadShared,
            h2: TypographyHeadShared,
            h3: TypographyHeadShared,
            h4: TypographyHeadShared,
            h5: TypographyHeadShared,
            h6: TypographyHeadShared,
            body1: TypographyBodyShared,
            body2: TypographyBodyShared,
          },
        },
      });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SWAPThemeWrap>{children}</SWAPThemeWrap>
      </ThemeProvider>
    </div>
  );
};

const SWAPThemeWrap = styled.div``;

export default SWAPTheme;
