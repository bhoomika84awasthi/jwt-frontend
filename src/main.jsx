import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";   // ✅ match lowercase filename
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
