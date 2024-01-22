import { Button, Row, Col } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Step1 from "../../assets/image/step1.png";
import Step2 from "../../assets/image/step2.png";
import Step3 from "../../assets/image/step3.png";
import Step4 from "../../assets/image/step4.png";
import Step5 from "../../assets/image/step5.png";
import Step6 from "../../assets/image/step6.png";

function Step() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const stepData = [
    {
      picUrl: Step1,
      step: t("Step 1"),
      subtitle: t("Get Started"),
    },
    {
      picUrl: Step2,
      step: t("Step 2"),
      subtitle: t("Confirmation"),
    },
    {
      picUrl: Step3,
      step: t("Step 3"),
      subtitle: t("Identify Verification"),
    },
    {
      picUrl: Step4,
      step: t("Step 4"),
      subtitle: t("Buy Cryptocurrency"),
    },
    {
      picUrl: Step5,
      step: t("Step 5"),
      subtitle: t("Sell Cryptocurrency"),
    },
    {
      picUrl: Step6,
      step: t("Step 6"),
      subtitle: t("Send and Receive"),
    },
  ];
  return (
    <div className="justify-center mt-32 overflow-hidden ">
      <p className="text-center text-3xl font-bold">{t("Help & Support")}</p>
      <div
        className="m-12 block md:flex flex-wrap  whitespace-nowrap md:whitespace-normal slide  "
        style={{ transform: `translate3d(${-1 * index * 100}%, 0, 0)` }}
      >
        {stepData.map((item, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/3 mb-8 text-center inline-block p-4"
          >
            <div className="shadow  h-full w-full p-4">
              <img src={item.picUrl} className="w-1/2 inline-block" />
              <br />
              <span className="text-lg ">{item.step}</span>
              <br />
              <span className="text-xl font-bold">{item.subtitle}</span>
              <br />
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots md:hidden">
        {stepData.map((item, idx) => (
          <div
            key={idx}
            className={`slideshowDot ${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Step;
