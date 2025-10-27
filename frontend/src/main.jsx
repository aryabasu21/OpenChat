import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
