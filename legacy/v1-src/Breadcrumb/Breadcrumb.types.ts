import { BoxProps } from "@material-ui/core";

export interface BreadcrumbProps extends BoxProps {
  children: React.ReactNode[];
  separator?: React.ReactNode;
  maxItems?: number;
}
