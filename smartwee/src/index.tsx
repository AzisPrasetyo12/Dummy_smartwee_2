import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./i18n";
import './index.scss';
import './style/tailwind/style.scss';

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <React.Suspense fallback="">
//       <App />
//     </React.Suspense>
//   </React.StrictMode>
// );

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Suspense fallback="">
    <App />
  </React.Suspense>
);
