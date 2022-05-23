import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import queryClient from "./api/queryClient";
import { App } from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
