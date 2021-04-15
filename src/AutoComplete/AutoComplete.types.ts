import {
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@material-ui/lab";

type OmitAutocompleteProps = Omit<
  AutocompleteProps<any, true, undefined, undefined>,
  "title" | "renderInput"
>;

export interface MyAutoCompleteProps extends OmitAutocompleteProps {
  helperText?: React.ReactNode;
  value?: any;
  handleNoOptionsValueChange?: Function;
  placeholder?: string;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  title?: React.ReactNode;
  width?: string | number;
  open?: boolean;
  anchorEl?: null | HTMLElement;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  disableFreeInput?: boolean;
  optionsMaxHeight?: string | number;
}
