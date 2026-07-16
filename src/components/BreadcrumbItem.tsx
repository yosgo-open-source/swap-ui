import * as React from "react";
import Link from "./Link";
import type { BreadcrumbItemProps } from "./BreadcrumbItem.types";

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ last, sx, ...rest }, ref) {
    const ourStyles = {
      fontWeight: last ? 700 : 400,
      ...(last
        ? { cursor: "unset", textDecoration: "none", "&:hover": { textDecoration: "none" } }
        : {}),
    };
    return (
      <Link
        ref={ref}
        color={last ? "black1000" : "black800"}
        sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
        {...rest}
      />
    );
  },
);

export default BreadcrumbItem;
