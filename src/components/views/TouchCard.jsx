import { Button } from "antd";
import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import Support from "../../assets/image/support.png";
import Blog2 from "../../assets/image/blog2.png";
import Community2 from "../../assets/image/community2.png";

function TouchCard() {
  const { t, i18n } = useTranslation();
  const inf = [
    {
      url: Support,
      title: t("Support"),
      content: t(
        "Got a problem? Just get in touch. Our support team is avaiable 24/7."
      ),
    },
    {
      url: Blog2,
      title: t("Blog"),
      content: t(
        "News and updates from the world's leading cryptocurrency exchange."
      ),
    },
    {
      url: Community2,
      title: t("Community"),
      content: t(
        "MGL is global. Join the discussion in our worldwide communities."
      ),
    },
  ];
  const { scrollYProgress } = useViewportScroll();
  return (
    <div className="flex justify-between flex-col md:flex-row">
      {inf.map((item, index) => (
        <motion.div
          key={index}
          className="touchCard w-full md:w-1/4 p-4 text-center "
        >
          <img src={item.url} className="w-1/3 inline" />
          <p className="m-4 font-bold text-lg">{item.title}</p>
          <p className="text-md">{item.content}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default TouchCard;
