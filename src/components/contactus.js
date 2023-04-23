import React from "react";
import ContactusStyles from "../styles/contactus.module.scss";
import Image from "next/image";
import ContactusImg from "../assets/images/contact-us.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import {motion} from "framer-motion";
function Contactus() {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  return (
    <div className={ContactusStyles["pointechs-contactus"]} id="contact-us" style={{direction:locale=='en'?'ltr':'rtl'}}>
      <main >
        <section>
          <div className={ContactusStyles['contact-us-header']}>
            <section>
              <span></span>
              <h1>{t("Contact Us")}</h1>
            </section>
            <p>{t("We Will Be Happy To Contact With You")}</p>
          </div>
          <form className={ContactusStyles['contactus-form']}>
            <div>
              <input type="text" name="Full Name" id="Full Name" />
              <label htmlFor="Full Name">{t("Full Name")}</label>
              <small></small>
            </div>
            <div>
         
              <input type="text" name="email" id="email" />
              <label htmlFor="email">{t("Email Address")}</label>
              <small></small>
            </div>
            <div>
              
              <input type="text" name="message" id="message" />
              <label htmlFor="message">{t("Enter your message here!")}</label>
              <small></small>
            </div>
            <div>
            <motion.button type="button" className={'btn'}
              whileHover={{scale:1.1,textShadow:'0px 0px 8px #27323C'}} 
              transition={{type:'spring',stiffness:300}}>
              {t("Send Message")}{" "}
              <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
            </motion.button>
            </div>
        
          </form>
        </section>
        <section>
          <Image src={ContactusImg} loading="lazy" alt="contact-us"/>
        </section>
      </main>
    </div>
  );
}

export default Contactus;
