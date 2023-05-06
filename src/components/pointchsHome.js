import React,{useContext, useEffect, useState} from "react";
import PointchsHomeStyles from "../styles/pointchsHome.module.scss";
import Image from "next/image";

import { RiArrowDropRightLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const DynamicSignup = dynamic(()=>import('./signup'),{ssr:false});
const DynamicLogin = dynamic(()=>import("./login"),{ssr:false});
import dynamic from "next/dynamic";
import {UserContext} from "../context/context";
import { MetaContext } from "../context/context";
import Head from "next/head";
function PointchsHome({metaTitle}) {
  const { t } = useTranslation("common");
  const { locale,query,push,pathname } = useRouter();
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [selectedLink,setSelectedLink] = useContext(UserContext);
  const [metaObji,setMetaObji] = useContext(MetaContext);

  useEffect(()=>{
    const {section} = query;
    if(section == 'home'){
      document
      .getElementById("home")
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
      setSelectedLink(0);
      /*
      if(metaTitle == undefined){
        setMetaObji((prev)=>({
          ...prev,
          title:"Pointechs | home"
        }))
      }
      /*

      */
    }
    
  },[])
  const handleModalVisibility = (event) => {

      setSignupModalShow(true);
      push({ pathname, query: { status: "signup-popup" } }, undefined, {
        locale,
        scroll: false,
        shallow: true,
      });
    

  };
  {console.log(metaTitle)}

  return (
    <>
    <Head>
      {metaTitle == "Pointechs | home"?<title>{metaTitle}</title>:false}
      {metaTitle == "Pointechs | home"?<meta property="og:title" key={"title"} content={t(metaTitle)} />:false}

     
    </Head>
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
            onClick={handleModalVisibility}
          >
            {t("Get Started Now")}{" "}
            <RiArrowDropRightLine  style={{ verticalAlign:"text-bottom" }}/>
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
