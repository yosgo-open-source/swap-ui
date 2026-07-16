import { useState } from "react";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import {
  CheckBox,
  RadioList,
  Select,
  Switch,
  TextField,
  Typography,
} from "@yosgo/swap-ui";

export default function Form() {
  const [plan, setPlan] = useState("monthly");
  const [category, setCategory] = useState("design");
  return (
    <Stack spacing={4} sx={{ maxWidth: 480 }}>
      <Typography variant="h5">表單元件</Typography>

      <TextField label="姓名" placeholder="請輸入姓名" helperText="預設高度 48px、label 置中" />
      <TextField label="信箱" error helperText="格式不正確" defaultValue="not-an-email" />

      <Select
        placeholder="請款類別"
        value={category}
        onChange={(e) => setCategory(e.target.value as string)}
        helperText="Select 組合元件"
      >
        <MenuItem value="design">設計費</MenuItem>
        <MenuItem value="dev">開發費</MenuItem>
      </Select>

      <Stack spacing={2}>
        <RadioList
          checked={plan === "monthly"}
          onClick={() => setPlan("monthly")}
          title="月繳"
          subtitle="NT$ 300 / 月"
        />
        <RadioList
          checked={plan === "yearly"}
          onClick={() => setPlan("yearly")}
          title="年繳"
          subtitle="NT$ 3,000 / 年"
        />
      </Stack>

      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <CheckBox label="同意服務條款" defaultChecked />
        <Switch defaultChecked />
      </Stack>
    </Stack>
  );
}
