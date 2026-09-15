import "./storageShim.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./site.jsx";

// Not: Gizli yönetim girişi site.jsx içinde zaten hash tabanlı olarak
// çalışıyor (siteniz.com/#/tstyonetim) — herhangi bir sunucu ayarı
// gerektirmediği için burada değiştirilmedi.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
