import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DefaultState } from "./screens/DefaultState/DefaultState";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DefaultState />
  </StrictMode>,
);
