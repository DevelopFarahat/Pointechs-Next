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

function HowPointechsWorks() {
  const howPointechsWorksStepsArr = [
    {
      id: 0,
      icon: <BsPersonGear/>,
      step: "Register your business at (www.Pointechs.com) and set up your loyalty program rules.",
    },
    {
      id: 1,
      icon: <MdAddLocationAlt/>,
      step: "Configure Branches, Locations and add your cashiers.",
    },
    {
      id: 2,
      icon: <MdPhoneIphone/>,
      step: "Customers can download the Pointechs app, create a profile, and issue their digital loyalty card",
    },
    {
      id: 3,
      icon: <BsUpcScan/>,
      step: "Cashiers can scan customer's digital card or use their mobile to reward or redeem points.",
    },
    {
      id: 4,
      icon: <ImStatsBars/>,
      step: "Access real-time analytics to measure the effectiveness of your loyalty program and make data-driven decisions. And keep track of points/stamps issued and used by each customer.",
    },
  ];
  return (
    <div className={HowPointechsStyles["how-pointechs-works"]} id="how-it-works">
      <main>
        <div>
          <Image src={HowPointechsWorksImg} loading="lazy" alt="how-pointechs-works" />
        </div>
        <div>
          <section>
            <span></span>
            <h1>How it Works ..</h1>
          </section>
          <section>
            {howPointechsWorksStepsArr.map((step)=>(
                <motion.div key={step.id} whileHover={{color:'#FFFFFF'}} >
                    <div>{step.icon}</div>
                    <p>{step.step}</p>
                </motion.div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default HowPointechsWorks;
