import { BoxProps } from "@material-ui/core";

export interface RadioListProps
  extends Pick<BoxProps, Exclude<keyof BoxProps, "title">> {
  multiline?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  checked: boolean;
  line?: boolean;
}
