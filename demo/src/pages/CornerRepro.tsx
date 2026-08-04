import * as React from "react";
import { Modal, TextField, Typography, useBreakpoints } from "@yosgo/swap-ui";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";

// 產品端回報「fullWidth bottom sheet 圓角消失」的原樣重現頁：
// 依產品端提供的 AppModal + 呼叫端程式碼逐項還原（icon/SearchField 以等價元素代替）
const clampOneLine: React.CSSProperties = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const projects = [
  "超級無敵宇宙 1234567890123456789012345678901234567890 專案",
  "C",
  "D",
  "完美妝容指南 設計 | 完美妝容指南 設計 | 完美妝容指南 設計 完美妝容指南 設計 1231",
  "一日遊達人 App 設計",
  "Creative Cues 設計案 | 第二期",
  "專案 G",
  "專案 H",
];

export default function CornerRepro() {
  const desktop = useBreakpoints("sm");
  const isMobile = !desktop;
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        開啟圓角重現 Modal
      </Button>
      <Modal
        size="small"
        mobile={isMobile}
        fullWidth={isMobile}
        open={open}
        onClose={() => setOpen(false)}
        title="將文件移入或移出專案"
        helpText={
          <Typography variant="body2" style={clampOneLine}>
            目前文件不屬於任何專案
          </Typography>
        }
        bodyPadding={0}
        label={
          <Box sx={{ pr: 3 }}>
            <Typography variant="title" style={clampOneLine}>
              移動至: {selected ?? ""}
            </Typography>
          </Box>
        }
        primaryButton={{
          title: "確認",
          onClick: () => setOpen(false),
          disabled: !selected,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mt: 2,
            p: "0 24px 16px 24px",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          <Typography variant="title">📁 專案列表</Typography>
          <TextField width={180} placeholder="搜尋專案名稱" />
        </Box>
        {projects.map((p) => (
          <Box
            key={p}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              borderBottom: "1px solid #F2F2F2",
            }}
          >
            <ButtonBase
              onClick={() => setSelected(p)}
              sx={{
                flex: 1,
                minWidth: 0,
                justifyContent: "flex-start",
                textAlign: "left",
                p: "16px 24px",
              }}
            >
              <Typography variant="body2" color={selected === p ? "primary400" : "black900"}>
                {p}
              </Typography>
            </ButtonBase>
          </Box>
        ))}
      </Modal>
    </div>
  );
}
