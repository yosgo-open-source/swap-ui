import { TooltipProps } from "@material-ui/core";

export interface MyTooltipProps
  extends Pick<TooltipProps, Exclude<keyof TooltipProps, "children">> {
  children: React.ReactNode;
}
