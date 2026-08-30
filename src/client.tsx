import { StrictMode, startTransition } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

const app = (
  <StrictMode>
    <StartClient />
  </StrictMode>
);

const shell = document.getElementById("homeostat-root");

startTransition(() => {
  if (shell) {
    createRoot(shell).render(app);
  } else {
    hydrateRoot(document, app);
  }
});
