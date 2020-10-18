import { Button } from "@material-ui/core";
import React, { useState } from "react";
import SWAPTheme from "../SWAPTheme/SWAPTheme";

import SWAPModal from "./SWAPModal";

export default {
  title: "SWAPModal",
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <SWAPTheme>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        動作按鈕
      </Button>
      <SWAPModal
        title="蓋板視窗"
        helpText="這個蓋板視窗..."
        open={open}
        onClose={() => setOpen(false)}
        primaryButton={{
          title: "確認執行",
          onClick: () => {},
          disabled: false,
        }}
        secondaryButton={{
          title: "返回",
          onClick: () => setOpen(false),
          disabled: false,
        }}
      >
        <div style={{ height: "1800px" }}>
          視窗內容放置於此：
          <br />
          1. 電腦版，視窗置中，由中往上下延伸。
          <br />
          2. 手機版，視窗置底，由下往上延伸。
          <br />
        </div>
      </SWAPModal>
    </SWAPTheme>
  );
};
