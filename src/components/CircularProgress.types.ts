import type * as React from "react";

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  size?: number | string;
  thickness?: number;
}
