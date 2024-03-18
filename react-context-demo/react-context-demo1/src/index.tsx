import ReactDOM from "react-dom/client";
import App from "./App";
import RandomServiceProvider from "./context/RandomServiceContext";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RandomServiceProvider>
      <App />
    </RandomServiceProvider>
  </React.StrictMode>
);
