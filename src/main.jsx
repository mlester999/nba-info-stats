import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NBAProviders } from "./store/nba-info-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NBAProviders>
    <App />
  </NBAProviders>
);
