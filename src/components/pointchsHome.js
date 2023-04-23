import React from "react";
import PointchsHomeStyles from "../styles/pointchsHome.module.scss";
import Image from "next/image";
import PointchsEnImage from "../assets/images/BG-en-img.webp";
import PointchsArImage from "../assets/images/BG-ar-img.png";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
function PointchsHome() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  return (
    <div
      className={PointchsHomeStyles["pointchs-home"]}
      id="home"
      style={{ direction: locale == "en" ? "ltr" : "rtl" }}
    >
      <div>
        <div>
          <p>
            GROW YOUR BUSINESS
            <br /> WITH <span>POINTECHS</span>
          </p>
          <p>
            The Easiest Way to Reward
            <br /> Your Customers
          </p>
          <motion.button
            type="button"
            className={`btn ${PointchsHomeStyles["btn-get-started-now"]}`}
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #27323C" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t("Get Started Now")}{" "}
            <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default PointchsHome;
