import { Typography } from "@material-ui/core";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

import React from "react";
import Space from "./Space";

export default {
  title: "Space",
};

export const Small = () => (
  <SWAPTheme>
    <Typography variant="h5">這是標題</Typography>
    <Space size="small" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </SWAPTheme>
);

export const Medium = () => (
  <SWAPTheme>
    <Typography variant="h5">這是標題</Typography>
    <Space size="medium" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </SWAPTheme>
);

export const Large = () => (
  <SWAPTheme>
    <Typography variant="h5">這是標題</Typography>
    <Space size="large" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </SWAPTheme>
);
