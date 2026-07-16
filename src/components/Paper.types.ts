import type { PaperProps as MuiPaperProps } from "@mui/material/Paper";

export interface PaperProps extends MuiPaperProps {
  width?: number | string;
  height?: number | string;
}
