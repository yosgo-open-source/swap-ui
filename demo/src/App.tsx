import { Routes, Route, Link as RouterLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container, SWAPLogo, Typography } from "@yosgo/swap-ui";
import Home from "./pages/Home";
import Form from "./pages/Form";

export default function App() {
  const { pathname } = useLocation();
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, py: 2 }}>
        <SWAPLogo size="small" />
        <Stack direction="row" spacing={1}>
          <Button
            component={RouterLink}
            to="/"
            variant={pathname === "/" ? "primary" : "text"}
            size="small"
          >
            首頁
          </Button>
          <Button
            component={RouterLink}
            to="/form"
            variant={pathname === "/form" ? "primary" : "text"}
            size="small"
          >
            表單
          </Button>
        </Stack>
      </Box>
      <Typography variant="caption2" color="tertiary">
        React Router + @yosgo/swap-ui v2 煙霧測試（npm registry 安裝 @next）
      </Typography>
      <Box sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Box>
    </Container>
  );
}
