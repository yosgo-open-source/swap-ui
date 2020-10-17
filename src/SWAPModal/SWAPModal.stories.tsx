// Generated with util/create-component.js
import { Button } from "@material-ui/core";
import React, { useState } from "react";

import SWAPModal from "./SWAPModal";

export default {
  title: "SWAPModal",
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        提領
      </Button>
      <SWAPModal
        title="提領款項"
        helpText="將 SWAP Points 提領至你的銀行帳戶"
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
