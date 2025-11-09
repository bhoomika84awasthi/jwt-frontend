import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";   // 👈 make sure filename is "App.jsx" with capital A
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
