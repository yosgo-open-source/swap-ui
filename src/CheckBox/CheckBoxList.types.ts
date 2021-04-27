import { BoxProps } from "@material-ui/core";

export interface CheckBoxListProps
  extends Pick<BoxProps, Exclude<keyof BoxProps, "title">> {
  multiline?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  checked: boolean;
  line?: boolean;
}
