export interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "d1"
    | "d2"
    | "d3"
    | "d4"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "title"
    | "subtitle"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "small1"
    | "small2"
    | "tiny1"
    | "tiny2"
    | "button_l"
    | "button_s"
    | "title_loose"
    | "subtitle_loose"
    | "body1_loose"
    | "body2_loose"
    | "caption1_loose"
    | "caption2_loose"
    | "small1_loose"
    | "small2_loose"
    | "tiny1_loose"
    | "tiny2_loose";
  color?:
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
  children?: React.ReactNode;
  style?: React.CSSProperties;
  mode?: "" | "dark";
}
