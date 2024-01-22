import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import App from "./App";
import UserProvider from "./components/providers/UserProvider";
import PresaleProvider from "./components/providers/PresaleProvider";
import WalletProvider from "./components/providers/WalletProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PresaleProvider>
        <ConfigProvider>
          <StyleProvider hashPriority="high">
            <App />
          </StyleProvider>
        </ConfigProvider>
      </PresaleProvider>
    </UserProvider>
  </React.StrictMode>
);
