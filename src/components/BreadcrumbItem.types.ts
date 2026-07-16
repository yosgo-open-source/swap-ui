import type { LinkProps } from "./Link.types";

export interface BreadcrumbItemProps extends LinkProps {
  last?: boolean;
}
