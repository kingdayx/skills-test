import { Button, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../../utils/translate.js";
import Nav from "../component/Nav.jsx";
import PairCardButton from "../component/PairCardButton.jsx";
import Main from "../views/Main.jsx";
import MarketTrend from "../views/MarketTrend.jsx";
import TouchCard from "../views/TouchCard.jsx";
import Mark from "../views/Mark.jsx";
import Footer from "../component/Footer.jsx";
import Advertisment from "../views/Advertisment.jsx";
import Step from "../views/Step.jsx";
import Roadmap from "../views/Roadmap.jsx";
import { SERVER_URL } from "../../constants/env.js";
const pair = [
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
  { name: "BTC", percent: 3.19763724, price: 57832.47921786725 },
];
function Home() {
  const { t, i18n } = useTranslation();
  const [coinData, setCoinData] = useState(pair);

  const stepData = [
    {
      picUrl: "/assets/img/step1.png",
      step: t("Step1"),
      subtitle: t("Get Started"),
    },
    {
      picUrl: "/assets/img/step2.png",
      step: t("Step2"),
      subtitle: t("Confirmation"),
    },
    {
      picUrl: "/assets/img/step3.png",
      step: t("Step3"),
      subtitle: t("Identify Verification"),
    },
    {
      picUrl: "/assets/img/step4.png",
      step: t("Step4"),
      subtitle: t("Buy Cryptocurrency"),
    },
    {
      picUrl: "/assets/img/step5.png",
      step: t("Step5"),
      subtitle: t("Sell Cryptocurrency"),
    },
    {
      picUrl: "/assets/img/step6.png",
      step: t("Step6"),
      subtitle: t("Send and Receive"),
    },
  ];
  const fetchData = async () => {
    try {
      axios.get(SERVER_URL + "wallets/gettoptokens").then((response) => {
        if (response.data.response && response.data.data.length > 0) {
          let data = response.data.data;
          console.log(data);
          let initCoinData = [];
          for (var i = 0; i < 6; i++)
            initCoinData.push({
              name: data[i].symbol,
              price: data[i].price,
              percent: data[i].daily_percent,
            });

          setCoinData(initCoinData);
        } else {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Main coinData={coinData} />
      <Mark />
      <Advertisment />
      <Step />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default Home;
