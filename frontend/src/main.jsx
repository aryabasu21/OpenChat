import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("v7_startTransition") ||
     args[0].includes("v7_fetcherPersist"))
  ) return;
  originalWarn(...args);
};

const router = createBrowserRouter(
  [
    {
      path: "/*", // ✅ all routes handled by App.jsx
      element: <App />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // ✅ removes warning
      v7_startTransition: true,
      v7_fetchPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,

    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
