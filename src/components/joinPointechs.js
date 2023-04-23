import React from "react";
import JoinPointechsStyles from "../styles/joinPointechs.module.scss";
import { RiArrowDropRightLine } from "react-icons/ri";
import {useTranslation} from "next-i18next";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
function JoinPointechs() {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  return (
    <div className={JoinPointechsStyles["join-section"]} style={{direction:locale=='en'?'ltr':'rtl'}}>
      <div>
        <p>
          Join the Pointechs family today and discover the benefits of a loyalty
          program that truly makes a difference!
        </p>
        <motion.button type="button" className={"btn"}
         whileHover={{scale:1.1,textShadow:'0px 0px 8px #27323C'}} 
         transition={{type:'spring',stiffness:300}}>
          {t("Get Started Now")}{" "}
          <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
        </motion.button>
      </div>
    </div>
  );
}

export default JoinPointechs;
