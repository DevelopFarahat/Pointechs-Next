import React, { useEffect, useRef, useState,useContext } from "react";
import WelcomeStyles from "../styles/welocme.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import VideoPosterImg from "../assets/images/video-poster.webp";
import PlayvideoSvgIcon from "../assets/images/play.svg";
import Modal from "react-bootstrap/Modal";
import { GrFormClose } from "react-icons/gr";
import UserContext from "../context/context";
import Head from "next/head";

function Welcome(props) {
  const { locale,push,query,pathname,asPath}  = useRouter();
  const { t } = useTranslation("common");
  const [modalShow, setModalShow] = useState(false);
  const [selectedLink,setSelectedLink] = useContext(UserContext);
 const  handleplayVideo = ()=>{
  push(`/?pointechs_video=Pointechs For Business`,undefined,{shallow:true});
  setModalShow(true);
  }
  const handleCloseVideoModal = ()=>{
    setModalShow(false)
    push(`/${locale}${pathname}`, undefined, { locale,scroll:false });
  }
  useEffect(()=>{
    const queries = Object.keys(query);
    if(queries.length){
      const {pointechs_video} = query;
      if(pointechs_video){
        setModalShow(true);
      }
    }
    const {section} = query;
    if(section == 'about-us'){
      document
      .getElementById("about-us")
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
      setSelectedLink(1);
    }
  },[]);
  return (
    <>
     <Head>
    <title>{t("Pointechs")} </title>
    </Head>
      <div className={WelcomeStyles["pointechs-welcome"]} id="about-us">
        <div style={{ direction: locale == "en" ? "ltr" : "ltr" }}>
          <div className={WelcomeStyles["pointechs-video-poster"]}>
            <Image
              src={VideoPosterImg}
              alt="video-poster"
              className={WelcomeStyles["video-poster"]}
            />
            <Image
              src={PlayvideoSvgIcon}
              alt="play"
              onClick={handleplayVideo}
            />
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow}
              onHide={handleCloseVideoModal}
            >
              <Modal.Body>
                <section className={WelcomeStyles['popup-video-modal-section']}>
                <div
                className={WelcomeStyles['iframe-video-c-header']}
              
                >
                  <span onClick={handleCloseVideoModal}>
                    <GrFormClose
                      style={{ color: "#27323C",fontSize:'25px' }} 
                     
                    />
                  
                  </span>
                </div>
                <div className={WelcomeStyles['embedded-youtube-iframe-c']}>
                <iframe
                  width="100%"
                  height="447"
                  src="https://www.youtube.com/embed/khEAmUlvNJs?autoplay=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
                ></iframe>
                </div>
                </section>
              </Modal.Body>
            </Modal>
          </div>
          <div
            className={WelcomeStyles["welcom-pointechs"]}
            style={{ direction: locale == "en" ? "ltr" : "rtl"}}
          >
            <section>
              <span></span>
              <h1>{t("Welcome to Pointechs")}</h1>
            </section>
            <section>
              {locale == "en" ? (
                <>
                  <p>
                    The ultimate loyalty program solution for businesses of all
                    sizes. Our innovative platform is designed to help you build
                    long-lasting relationships with your customers, increase
                    sales, and drive sustainable growth.
                  </p>
                  <p>
                    Our platform is designed to build a relationship between
                    merchants and their customers by providing a portal that
                    allows merchants to track their loyalty program, as well as
                    a mobile app for customers to view their points and redeem
                    them in real-time.
                  </p>
                  <p>
                    The portal features a loyalty dashboard that merchants can
                    use to track customer engagement, redemption rates, and
                    overall business growth.
                  </p>
                </>
              ) : (
                <p
                  style={{
                    textAlign: locale == "en" ? "left" : "right",
                    fontSize: locale == "en" ? "1.1rem" : "1.3rem",
                  }}
                >
                  الحل الأمثل والمتكامل لإدارة الولاء للمتاجر والشركات. تم تصميم
                  منصتنا المبتكرة لمساعدتك فى بناء علاقات طويلة الأمد مع عملائك،
                  وزيادة مبيعاتك، ومضاعفة ارباحك.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
