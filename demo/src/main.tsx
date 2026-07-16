import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SWAPThemeProvider } from "@yosgo/swap-ui";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SWAPThemeProvider>
        <App />
      </SWAPThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
