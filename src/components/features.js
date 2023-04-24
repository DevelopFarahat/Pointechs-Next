import React from "react";
import FeaturesStyles from "../styles/features.module.scss";
import Image from "next/image";
import {TiUser} from "react-icons/ti";
import {motion} from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function Features() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const featuresArr = [
    {
      id: 0,
      title: t("Digital Loyalty Cards"),
      details:t("feature_1"),
    },
    {
      id: 1,
      title:t("Points, Stamps, and Discount Coupons Programs"),
      details:t("feature_2")
    },
    {
      id: 2,
      title:t("Referral and New Customer Growth"),
      details:t("feature_3")
        
    },
    {
      id: 3,
      title:t("Promotional Offers"),
      details:t("feature_4")

    },
    {
      id: 4,
      title:t("Tiers Program"),
      details:t("feature_5")

    },
    {
      id: 5,
      title:t("Tiers Program"),
      details:t("feature_6")

    },
    {
      id: 6,
      title:t("Business Information"),
      details:t("feature_7")
       
    },
    {
      id: 7,
      title:t("Customer Feedback"),
      details:t("feature_8")

    },
  ];
  return (
    <div className={FeaturesStyles["features"]} id="our-features">
      <div>
      <section>
        <span></span>
        <h1>{t("Features of Pointechs")}</h1>
      </section>
      <section>
        {featuresArr.map((feature)=>(
        <motion.div key={feature.id} className={FeaturesStyles['feature']} whileHover={{scale:1.1}} transition={{type:'spring',stiffness:300}}>
          <div>
          <TiUser/>
          </div>
        <h6 style={{textAlign:locale == 'en'?'left':'right'}}>{feature.title}</h6>
        <p style={{textAlign:locale == 'en'?'left':'right',fontSize:locale == 'en'?'1rem':'1.1rem'}}>{feature.details}</p>
      </motion.div>
        ))}

      </section>
      </div>
    </div>
  );
}

export default Features;
