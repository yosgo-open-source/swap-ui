import { TabProps } from "@material-ui/core";

export interface MyTabProps extends TabProps {
  selected?: boolean;
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  fontSize?: number | string;
  noIndicator?: boolean;
  animation?: boolean;
}
