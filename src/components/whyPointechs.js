import React from "react";
import whyPointehsStyles from "../styles/whyPointechs.module.scss";
import Image from "next/image";
import whyPointechsImg from "../assets/images/why-pointechs.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import {useTranslation} from "next-i18next";
import {motion} from "framer-motion";
function WhyPointechs() {
  const {t} = useTranslation('common');
  return (
    <div className={whyPointehsStyles["why-pointechs"]} id="why-us">
      <main>
      <section>
        <div>
          <main>
            <span></span>
            <h1>Why Pointechs?</h1>
          </main>

          <p>
            At Pointechs, we understand the importance of building and
            maintaining strong relationships with your customers. That's why we
            offer a simple and effective loyalty program solution that empowers
            businesses to increase customer retention, sales, and profitability.
          </p>
          <p>
            With Pointechs, Merchants can easily create and customize rewards
            that best fit their business and customers' needs.
          </p>
          <p>
            Our analytics tools make it easy to measure the effectiveness of
            your loyalty program. With Pointechs, you can keep track of
            points/stamps issued to each customer, know when and how many
            points/stamps are used, and analyze your customers' visit pattern to
            gain more insights.
          </p>
        </div>
        <div>
          <Image src={whyPointechsImg} loading="lazy" alt="why-pointechs-img" />
        </div>
      </section>
      </main>
      <section>
        <main>
        <p>
          Join Pointechs today and start seeing the benefits of a successful and
          profitable business.
        </p>
        <motion.button type="button" className={`btn`} whileHover={{scale:1.1,textShadow:'0 0 8px #FEB247'}} transition={{type:'spring',stiffness:300}}>
        {t("Get Started Now")} {" "}
          <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
        </motion.button>
        </main>
      </section>
    </div>
  );
}

export default WhyPointechs;
