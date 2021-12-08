import React from "react";
import Link from "../Link/Link";
import { BreadcrumbItemProps } from "./BreadcrumbItem.types";

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (
  props
): React.ReactElement => {
  const { last, ...other } = props;
  return (
    <Link
      {...other}
      color={last ? "black1000" : "black800"}
      style={{
        fontWeight: last ? 700 : 400,
        cursor: last ? "unset" : undefined,
        textDecoration: last ? "none" : undefined,
      }}
    />
  );
};

export default BreadcrumbItem;
