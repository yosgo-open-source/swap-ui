import type * as React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  separator?: React.ReactNode;
  maxItems?: number;
}
