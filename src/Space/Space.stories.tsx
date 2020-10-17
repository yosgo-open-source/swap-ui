// Generated with util/create-component.js
import { Typography } from "@material-ui/core";
import React from "react";
import Space from "./Space";

export default {
  title: "Space",
};

export const Small = () => (
  <div>
    <Typography variant="h5">這是標題</Typography>
    <Space size="small" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </div>
);

export const Medium = () => (
  <div>
    <Typography variant="h5">這是標題</Typography>
    <Space size="medium" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </div>
);

export const Large = () => (
  <div>
    <Typography variant="h5">這是標題</Typography>
    <Space size="large" />
    <Typography variant="body2" color="textSecondary">
      這是副標題(中間間隔是 Space 元件)
    </Typography>
  </div>
);
