import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <HelmetProvider>
    <App />
  </HelmetProvider>
</BrowserRouter>

);
