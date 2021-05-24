export interface ModalProps {
  footer?: React.ReactNode;
  multiline?: boolean;
  titleStyle?: React.CSSProperties;
  open: boolean;
  checked?: boolean;
  failed?: boolean;
  buttonFullWidth?: boolean;
  footerDisplayColumn?: boolean;
  mobile?: boolean;
  fullWidth?: boolean;
  onClose: () => void;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  title?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  size?: "medium" | "large" | "small" | "extraSmall";
  headpadding?: number | string;
  headChildren?: React.ReactNode;
  children?: React.ReactNode;
  label?: React.ReactNode;
  bodyPadding?: number | string;
  bodyMaxHeight?: number | string;
  onExit?: boolean;
  secondaryButton?: {
    title?: string | React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    variant?:
      | "primary"
      | "secondary"
      | "text"
      | "tertiary"
      | "black"
      | "danger";
    loading?: boolean;
  };
  primaryButton?: {
    title?: string | React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    variant?:
      | "primary"
      | "secondary"
      | "text"
      | "tertiary"
      | "black"
      | "danger";
    loading?: boolean;
  };
  disUnderLine?: boolean;
  disCloseIcon?: boolean;
  icon?: React.ReactNode;
  checkIconColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary50"
    | "primary100"
    | "primary200"
    | "primary300"
    | "primary400"
    | "primary500"
    | "primary600"
    | "primary700"
    | "primary800"
    | "primary900"
    | "primaryA11y"
    | "secondary50"
    | "secondary100"
    | "secondary200"
    | "secondary300"
    | "secondary400"
    | "secondary500"
    | "secondary600"
    | "secondary700"
    | "secondary800"
    | "secondary900"
    | "secondaryA11y"
    | "danger50"
    | "danger100"
    | "danger200"
    | "danger300"
    | "danger400"
    | "danger500"
    | "danger600"
    | "danger700"
    | "danger800"
    | "danger900"
    | "dangerA11y"
    | "success50"
    | "success100"
    | "success200"
    | "success300"
    | "success400"
    | "success500"
    | "success600"
    | "success700"
    | "success800"
    | "success900"
    | "successA11y"
    | "white"
    | "black100"
    | "black200"
    | "black300"
    | "black400"
    | "black500"
    | "black600"
    | "black700"
    | "black800"
    | "black900"
    | "black1000";
  iconColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary50"
    | "primary100"
    | "primary200"
    | "primary300"
    | "primary400"
    | "primary500"
    | "primary600"
    | "primary700"
    | "primary800"
    | "primary900"
    | "primaryA11y"
    | "secondary50"
    | "secondary100"
    | "secondary200"
    | "secondary300"
    | "secondary400"
    | "secondary500"
    | "secondary600"
    | "secondary700"
    | "secondary800"
    | "secondary900"
    | "secondaryA11y"
    | "danger50"
    | "danger100"
    | "danger200"
    | "danger300"
    | "danger400"
    | "danger500"
    | "danger600"
    | "danger700"
    | "danger800"
    | "danger900"
    | "dangerA11y"
    | "success50"
    | "success100"
    | "success200"
    | "success300"
    | "success400"
    | "success500"
    | "success600"
    | "success700"
    | "success800"
    | "success900"
    | "successA11y"
    | "white"
    | "black100"
    | "black200"
    | "black300"
    | "black400"
    | "black500"
    | "black600"
    | "black700"
    | "black800"
    | "black900"
    | "black1000";
}
