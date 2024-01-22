import { Button } from "antd";
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import Register from "./components/pages/Register.jsx";
import WalletLanding from "./components/pages/WalletLanding/WalletLanding.jsx";
import WalletAccess from "./components/pages/WalletAccess/WalletAccess.jsx";
import LogIn from "./components/pages/Login.jsx";
import AdminLogin from "./components/pages/AdminLogin.jsx";
import Launch from "./components/pages/Launch.jsx";
import Redirection from "./components/pages/Redirection";
import BuySell from "./components/pages/BuySell";
import AdminPanel from "./components/pages/Admin/AdminPanel";
import UserInfo from "./components/pages/UserInfo";
import Wallet from "./components/pages/Wallet";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZMmYAXfwIgeij2zd2dOzMsdBKWLG3-ME",
//   authDomain: "mgldefigo.firebaseapp.com",
//   projectId: "mgldefigo",
//   storageBucket: "mgldefigo.appspot.com",
//   messagingSenderId: "1096055561424",
//   appId: "1:1096055561424:web:aa590e7a2f7c3de8bf92d5",
//   measurementId: "G-PL0D18H80Q",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBUCLGfBxle6glhjc1jP3uSr7PMSxXFVMw",
  authDomain: "skill-test-2db16.firebaseapp.com",
  projectId: "skill-test-2db16",
  storageBucket: "skill-test-2db16.appspot.com",
  messagingSenderId: "365341210049",
  appId: "1:365341210049:web:56f185a1f5ca5694b4ab40",
  measurementId: "G-YSYHEPMZDR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
function App() {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/walletphrase/:id" element={<WalletAccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/walletMain" element={<WalletLanding />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/launchpad" element={<Launch />} />
        <Route path="/ieo/:url" element={<Redirection />} />
        <Route path="/wallet" element={<Wallet />}>
          <Route path="/wallet/:id" element={<Wallet />}>
            <Route
              path="/wallet/:id/:presaleToken/:chainId"
              element={<Wallet />}
            />
          </Route>
        </Route>
        <Route path="/wallet/:id" element={<Wallet />} />
        <Route path="/p2p" element={<BuySell />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:jxt" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
