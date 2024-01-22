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
import Step1 from "../../assets/image/step1.png";
import Step2 from "../../assets/image/step2.png";
import Step3 from "../../assets/image/step3.png";
import Step4 from "../../assets/image/step4.png";
import Step5 from "../../assets/image/step5.png";
import Step6 from "../../assets/image/step6.png";

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
      picUrl: Step1,
      step: t("Step1"),
      subtitle: t("Get Started"),
    },
    {
      picUrl: Step2,
      step: t("Step2"),
      subtitle: t("Confirmation"),
    },
    {
      picUrl: Step3,
      step: t("Step3"),
      subtitle: t("Identify Verification"),
    },
    {
      picUrl: Step4,
      step: t("Step4"),
      subtitle: t("Buy Cryptocurrency"),
    },
    {
      picUrl: Step5,
      step: t("Step5"),
      subtitle: t("Sell Cryptocurrency"),
    },
    {
      picUrl: Step6,
      step: t("Step6"),
      subtitle: t("Send and Receive"),
    },
  ];
  const fetchData = async () => {
    try {
      axios.get().then((response) => {
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
