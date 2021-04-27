import { PaperProps } from "@material-ui/core";

export interface MyPaperProps extends PaperProps {
  width?: number | string;
  height: number | string;
}
