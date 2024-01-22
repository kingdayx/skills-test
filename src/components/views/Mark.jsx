import { Button, Row, Col } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShoppingCard from "../component/ShoppingCard";
import LaunchPad from "../../assets/image/launchpad.png";
import Shopping from "../../assets/image/tokeninfo.png";
import TokenInfo from "../../assets/image/shopping.png";
import Defi from "../../assets/image/defi.png";

const delay = 5000;
const card = [
  { url: LaunchPad, link: "http://ieo.mglcoin.io/" },
  { url: TokenInfo, link: "http://info.mglcoin.io/" },
  { url: Defi, link: "http://defi.mglcoin.io/" },
  { url: Shopping, link: "http://exchange.mglcoin.io/" },
];
function Mark() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  return (
    <div className="w-11/12 xl:w-5/6 m-auto mt-8 overflow-hidden">
      <div
        className="whitespace-nowrap slide "
        style={{ transform: `translate3d(${-1 * index * 100}%, 0, 0)` }}
      >
        {card.map((item, idx) => (
          <Col key={idx} sm={24} md={6} className="p-2 inline-block w-full">
            <ShoppingCard
              url={item.url}
              link={item.link}
              key={idx}
              real={idx == 1}
            />
          </Col>
        ))}
      </div>

      <div className="flex flex-row slideshowDots md:hidden ">
        {card.map((item, idx) => (
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

export default Mark;
