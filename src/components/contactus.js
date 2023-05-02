import React, { useState,useContext,useEffect } from "react";
import ContactusStyles from "../styles/contactus.module.scss";
import Image from "next/image";
import ContactusImg from "../assets/images/contact-us.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import {motion} from "framer-motion";
import UserContext from "../context/context";
import Head from "next/head";
function Contactus() {
  const {t} = useTranslation('common');
  const {locale,query} = useRouter();
  const [selectedLink,setSelectedLink] = useContext(UserContext);
  const [contactusInfo,setContactusInfo] = useState({
    fullname:"",
    email:"",
    message:""
  });
  const [errors,setErrors] = useState({
    fullnameError:"",
    emailError:"",
    messageError:""
  })
  const handleUserData = (event)=>{
    setContactusInfo({
      ...contactusInfo,
      [event.target.name]:event.target.value
    })
    handleErrors(event.target.name,event.target.value);
  }
  const handleErrors = (field,value)=>{
    if (field == "fullname") {
      const fullnameRegx = /[a-z A-Z]{3,}\s*$/;
      setErrors({
        ...errors,
        fullnameError:
          value.length == 0
            ? t("fullname is required")
            : fullnameRegx.test(value)
            ? ""
            : t("Name must consist of only uppercase or lowercase letters"),
      });
    } else if (field == "email") {
      const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i;
      setErrors({
        ...errors,
        emailError:
          value.length == 0
            ? t("email is required")
            : emailRegx.test(value)
            ? ""
            : t("email address should have the format username@domain.com and should not contain any spaces or special characters other than . - _ +"),
      });
    }else{
      setErrors({
        ...errors,
        messageError:value.length == 0?t("message is Required"):''
      })
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    
    for(let key in contactusInfo){
      if(contactusInfo[key] == "") return
    }
   
    for(let key in errors){
      if(errors[key] != "") return
    }
    
    console.log(contactusInfo)
  }
  useEffect(()=>{
    const {section} = query;
    if(section == 'contact-us'){
      document
      .getElementById("contact-us")
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
      setSelectedLink(5);
    }
  },[])
  return (
    <>
          <Head>
        <title>{t("Pointechs")}</title>
        <meta name="description" content={t("meta_description_one")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mohamed Farahat " />
        <meta name="audience" content="all" />
        {/* <!-- Search Engine --> */}
        <meta name="description" content={t("meta_description_one")} />
        <meta property="og:url" content="https://pointechs.com" />
        <meta name="image" content="android-chrome-192x192.png" />
        {/*<!-- Schema.org for Google --> */}
        <meta itemprop="description" content={t("meta_description_one")} />

        <meta itemprop="image" content="android-chrome-192x192.png" />
        <meta property="og:url" content="Pointechs | بوينتكس " />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta property="og:title" content="Pointechs | بوينتكس " />
        <meta property="og:description" content={t("meta_description_one")} />
        <meta property="og:image" content="android-chrome-192x192.png" />
        <meta property="og:image:width" content="300px" />
        <meta property="og:image:height" content="300px" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="Pointechs | بوينتكس " />
        {/*<!----Twitter--> */}
        <meta name="twitter:title" content="Pointechs | بوينتكس " />
        <meta name="twitter:description" content={t("meta_description_one")} />
        <meta name="twitter:image" content="android-chrome-192x192.png" />
        <meta name="twitter:url" content="Pointechs | بوينتكس " />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t("meta_description_one")} />
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
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
          <form className={ContactusStyles['contactus-form']} onSubmit={handleSubmit}>
            <div>
              <input type="text" name="fullname" id="Full Name" value={contactusInfo.fullname} className={`${errors.fullnameError?ContactusStyles['input-is-invalid']:''}`} onBlur={handleUserData} onChange={handleUserData}/>
              <label htmlFor="Full Name">{t("Full Name")}</label>
              <small className={`text-danger errorMessage`}>{errors.fullnameError}</small>
            </div>
            <div>
         
              <input type="text" name="email" id="contactus-email" value={contactusInfo.email} className={`${errors.emailError?ContactusStyles['input-is-invalid']:''}`} onBlur={handleUserData} onChange={handleUserData}/>
              <label htmlFor="email">{t("Email Address")}</label>
              <small className={`text-danger errorMessage`}>{errors.emailError}</small>
            </div>
            <div>
              
              <textarea name="message" id="message" value={contactusInfo.message} className={`${errors.messageError?ContactusStyles['input-is-invalid']:''}`} onBlur={handleUserData} onChange={handleUserData}></textarea>
              <label htmlFor="message">{t("Enter your message here!")}</label>
              <small className={`text-danger errorMessage`}>{errors.messageError}</small>
            </div>
            <div>
            <button type="submit" className={'btn'}
              style={{direction:locale == 'en'?'ltr':'ltr'}}
              
              >
              {t("Send Message")}{" "}
              <RiArrowDropRightLine  style={{ verticalAlign:"text-bottom" }}/>
            </button>
            </div>
        
          </form>
        </section>
        <section style={{left:locale == 'en'?'50%':'0'}}>
          <Image src={ContactusImg} loading="lazy" alt="contact-us"/>
        </section>
      </main>
    </div>
    </>

  );
}

export default Contactus;
