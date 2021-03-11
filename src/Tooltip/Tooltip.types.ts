import { TooltipProps } from "@material-ui/core";

export interface MyTooltipProps
  extends Pick<TooltipProps, Exclude<keyof TooltipProps, "children">> {
  children: React.ReactNode;
  dark?: boolean;
  light?: boolean;
  arrow?: boolean;
  margin?: string | number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}
