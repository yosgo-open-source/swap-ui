import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {
  Banner,
  Card,
  Chip,
  Modal,
  Progress,
  Snackbar,
  Typography,
} from "@yosgo/swap-ui";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  return (
    <Stack spacing={4} sx={{ maxWidth: 640 }}>
      <div>
        <Typography variant="h4">SWAP UI v2 Demo</Typography>
        <Typography variant="body2_loose" color="secondary">
          以下元件全部來自 npm registry 的 2.0.0-beta.1（--tag next）——與產品端將安裝到的內容一致。
        </Typography>
      </div>

      <Banner variant="success">套件安裝與 theme 掛載成功，字體與樣式皆由 SWAPThemeProvider 提供。</Banner>

      <Stack direction="row" spacing={1}>
        <Chip variant="primary" label="請款中" contained />
        <Chip variant="success" label="已完成" contained />
        <Chip variant="danger" label="已逾期" />
        <Chip variant="neutral" label="草稿" />
      </Stack>

      <Progress step={2} count={4} label={["填寫", "確認", "送出", "完成"]} />

      <Card
        buttons={[
          { title: "開啟 Modal", onClick: () => setModalOpen(true) },
          { title: "觸發 Snackbar", variant: "secondary", onClick: () => setSnackOpen(true) },
        ]}
      >
        <Typography variant="title">互動測試卡片</Typography>
        <Typography variant="body2" color="tertiary">
          點下方按鈕驗證 Modal 與 Snackbar。
        </Typography>
      </Card>

      <Pagination count={10} defaultPage={3} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal 渲染正常"
        helpText="head / body / footer 與動畫皆來自 npm 發佈版本。"
        size="small"
        secondaryButton={{ title: "關閉", onClick: () => setModalOpen(false) }}
        primaryButton={{ title: "確認", onClick: () => setModalOpen(false) }}
      >
        <Typography variant="body2_loose" color="black800">
          如果你看得到這段文字，Modal 組合元件運作正常。
        </Typography>
      </Modal>

      <Snackbar
        open={snackOpen}
        autoHideDuration={2500}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="success"
        checkIcon
        message="Snackbar 渲染正常"
        closeIcon={{ onClick: () => setSnackOpen(false) }}
      />

      <Button variant="danger" size="large" onClick={() => setSnackOpen(true)}>
        theme 驅動的原生 MUI Button
      </Button>
    </Stack>
  );
}
