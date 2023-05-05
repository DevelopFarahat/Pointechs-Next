import React,{useContext,useEffect} from "react";
import HowPointechsStyles from "../styles/howPointehcsWorks.module.scss";
import Image from "next/image";
import HowPointechsWorksImg from "../assets/images/how-pointechs-works.webp";
import HowitWorksSVG_1 from "../assets/images/how-01.svg";
import HowitWorksSVG_2 from "../assets/images/how-02.svg";
import HowitWorksSVG_3 from "../assets/images/how-03.svg";
import HowitWorksSVG_4 from "../assets/images/how-04.svg";
import HowitWorksSVG_5 from "../assets/images/how-05.svg";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {UserContext} from "../context/context";
import { MetaContext } from "../context/context";
import Head from "next/head";
function HowPointechsWorks() {
  const { t } = useTranslation("common");
  const { locale,query } = useRouter();
  const [selectedLink,setSelectedLink] = useContext(UserContext);
  const [metaObji,setMetaObji] = useContext(MetaContext);
  const howPointechsWorksStepsArr = [
    {
      id: 0,
      icon: HowitWorksSVG_1,
      step: t("how-pointechs-works-p1"),
    },
    {
      id: 1,
      icon: HowitWorksSVG_2,
      step: t("how-pointechs-works-p2"),
    },
    {
      id: 2,
      icon: HowitWorksSVG_3,
      step: t("how-pointechs-works-p3"),
    },
    {
      id: 3,
      icon: HowitWorksSVG_4,
      step: t("how-pointechs-works-p4"),
    },
    {
      id: 4,
      icon: HowitWorksSVG_5,
      step: t("how-pointechs-works-p5"),
    },
  ];
  useEffect(()=>{
    const {section} = query;
    if(section == 'how-it-works'){
      document
      .getElementById("how-it-works")
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
      setSelectedLink(4);
      setMetaObji((prev)=>({
        ...prev,
        title:"Pointechs | how-it-works"
      }))
    }
  },[])
  return (
    <>
    <Head>
      <title>{t(metaObji.title)}</title>
    </Head>
        <div className={HowPointechsStyles["how-pointechs-works"]} id="how-it-works">
      <main>
        <div style={{order:locale == 'en'?2:2}}>
          <Image src={HowPointechsWorksImg} loading="lazy" alt="how-pointechs-works" />
        </div>
        <div style={{order:locale == 'en'?1:1}}>
          <section>
            <span></span>
            <h1>{t("How it Works ..")}</h1>
          </section>
          <section>
            {howPointechsWorksStepsArr.map((step)=>(
                <div key={step.id}>
                    <div>
                      <Image src={step.icon} loading="lazy" alt={step.icon.src.substr(step.icon.src.lastIndexOf("/")+1).split(".")[0]}/>
                      </div>
                    <p style={{textAlign:locale == 'en'?'left':'right'}}>{step.step}</p>
                </div>
            ))}
          </section>
        </div>
      </main>
    </div>
    </>

  );
}

export default HowPointechsWorks;
