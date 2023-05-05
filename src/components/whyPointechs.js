import React,{useState,useContext,useEffect} from "react";
import whyPointehsStyles from "../styles/whyPointechs.module.scss";
import Image from "next/image";
import whyPointechsImg from "../assets/images/why-pointechs.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const DynamicSignup = dynamic(()=>import('./signup'),{ssr:false});
const DynamicLogin = dynamic(()=>import("./login"),{ssr:false});
import {UserContext} from "../context/context";
import { MetaContext } from "../context/context";
import Head from "next/head";
function WhyPointechs() {
  const {t} = useTranslation('common');
  const { locale,query,push,pathname} = useRouter();
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [selectedLink,setSelectedLink] = useContext(UserContext);
  const [metaObji,setMetaObji] = useContext(MetaContext);
  useEffect(()=>{
    const {section} = query;
    if(section == 'why-us'){
      document
      .getElementById("why-us")
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
      setSelectedLink(3);
      setMetaObji((prev)=>({
        ...prev,
        title:"Pointechs | why-us"
      }))
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
  return (
    <>
    <Head>
      <title>{t(metaObji.title)}</title>
    </Head>
    <div className={whyPointehsStyles["why-pointechs"]} id="why-us">
      <main>
      <section>
        <div>
          <main>
            <span></span>
            <h1>{t("Why Pointechs?")}</h1>
          </main>

          <p style={{textAlign:locale == 'en'?'left':'right'}}>
           {t("why_p1")}
          </p>
          <p style={{textAlign:locale == 'en'?'left':'right'}}>
          {t("why_p2")}
          </p>
          <p style={{textAlign:locale == 'en'?'left':'right'}}>
          {t("why_p3")}
          </p>
        </div>
        <div>
          <Image src={whyPointechsImg} loading="lazy" alt="why-pointechs-img" />
        </div>
      </section>
      </main>
      <section>
        <main>
        <p style={{textAlign:locale == 'en'?'left':'right'}}>
          {t("join_p1")}
        </p>
        <button type="button" className={`btn`}  style={{direction:locale == 'en'?'ltr':'ltr'}}  onClick={handleModalVisibility}>
        {t("Get Started Now")} {" "}
          <RiArrowDropRightLine  style={{ verticalAlign:"text-bottom" }}/>
        </button>
        </main>
      </section>
    </div>
    <DynamicSignup show={signupModalShow} setLoginModalShow={setLoginModalShow} onHide={()=>setSignupModalShow(false)}/>
    <DynamicLogin show={loginModalShow} setSignupModalShow={setSignupModalShow} onHide={()=>setLoginModalShow(false)}/>
    </>

  );
}

export default WhyPointechs;
