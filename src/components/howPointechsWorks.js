import React from "react";
import HowPointechsStyles from "../styles/howPointehcsWorks.module.scss";
import Image from "next/image";
import HowPointechsWorksImg from "../assets/images/how-pointechs-works.webp";
import {BsPersonGear} from "react-icons/bs";
import {MdAddLocationAlt} from "react-icons/md";
import {MdPhoneIphone} from "react-icons/md";
import {BsUpcScan} from "react-icons/bs";
import {ImStatsBars} from "react-icons/im";
import {motion} from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function HowPointechsWorks() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const howPointechsWorksStepsArr = [
    {
      id: 0,
      icon: <BsPersonGear/>,
      step: t("how-pointechs-works-p1"),
    },
    {
      id: 1,
      icon: <MdAddLocationAlt/>,
      step: t("how-pointechs-works-p2"),
    },
    {
      id: 2,
      icon: <MdPhoneIphone/>,
      step: t("how-pointechs-works-p3"),
    },
    {
      id: 3,
      icon: <BsUpcScan/>,
      step: t("how-pointechs-works-p4"),
    },
    {
      id: 4,
      icon: <ImStatsBars/>,
      step: t("how-pointechs-works-p5"),
    },
  ];
  return (
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
                <motion.div key={step.id} whileHover={{color:'#FFFFFF'}} >
                    <div>{step.icon}</div>
                    <p style={{textAlign:locale == 'en'?'left':'right'}}>{step.step}</p>
                </motion.div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default HowPointechsWorks;
