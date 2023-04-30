import React,{useState} from "react";
import PointchsHomeStyles from "../styles/pointchsHome.module.scss";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const DynamicSignup = dynamic(()=>import('./signup'),{ssr:false});
const DynamicLogin = dynamic(()=>import("./login"),{ssr:false});
import dynamic from "next/dynamic";
function PointchsHome() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  return (
    <>
        <div
      className={`${PointchsHomeStyles["pointchs-home"]} ${
        locale == "ar" ? PointchsHomeStyles["pointechs-home-ar"] : ""
      }`}
      id="home"
    >
      <div>
        <div>
          <p>
            {t("GROW YOUR BUSINESS")}
            <br /> {t("WITH")} <span>{t("POINTECHS")}</span>
          </p>
          {locale == "en" ? (
            <p>
              {t("The Easiest Way to Reward")}
              <br /> {t("Your Customers")}
            </p>
          ) : (
            <p>
              {t("The Easiest Way to Reward")}
              {t("Your Customers")}
            </p>
          )}
          <div className={PointchsHomeStyles['get-started-btn-container']} style={{direction:locale == 'en'?'ltr':'rtl'}}>
          <button
            type="button"
            className={`btn ${PointchsHomeStyles["btn-get-started-now"]}`}
            style={{direction:locale == 'en'?'ltr':'ltr'}}
            onClick={ ()=>setSignupModalShow(true)}
          >
            {t("Get Started Now")}{" "}
            <RiArrowDropRightLine style={{ verticalAlign:locale == 'en'?"text-bottom":"text-top" }} />
          </button>
          </div>
        </div>
      </div>
    </div>
    <DynamicSignup show={signupModalShow} setLoginModalShow={setLoginModalShow} onHide={()=>setSignupModalShow(false)}/>
    <DynamicLogin show={loginModalShow} setSignupModalShow={setSignupModalShow} onHide={()=>setLoginModalShow(false)}/>
    </>

  );
}

export default PointchsHome;
