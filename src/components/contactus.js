import React, { useState } from "react";
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
              <RiArrowDropRightLine style={{ verticalAlign:locale == 'en'?"text-bottom":"text-top" }} />
            </button>
            </div>
        
          </form>
        </section>
        <section style={{left:locale == 'en'?'50%':'0'}}>
          <Image src={ContactusImg} loading="lazy" alt="contact-us"/>
        </section>
      </main>
    </div>
  );
}

export default Contactus;
