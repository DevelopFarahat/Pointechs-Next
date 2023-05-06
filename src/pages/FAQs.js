import React, { useEffect,useContext } from "react";
import FAQsStyles from "../styles/FAQs.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaContext } from "../context/context";
import Head from "next/head";
function FAQS() {
  const { t } = useTranslation("common");
  const { locale, asPath } = useRouter();
  const [metaObji,setMetaObji] = useContext(MetaContext);
  const FAQsArr = [
    {
      id: 0,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 1,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 2,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 3,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 4,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 5,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 6,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 7,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 8,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 9,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 10,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
    {
      id: 11,
      q: "How does it work?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.",
    },
  ];
  useEffect(()=>{
    setMetaObji((prev)=>({
      ...prev,
      title:"Pointechs | FAQs"
    }))
  },[]);
  return (
    <>
      <Head>
      <title>{t(metaObji.title)}</title>
      <meta name="description" content={t("meta_description_one")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mohamed Farahat " />
        <meta name="audience" content="all" />
        {/* <!-- Search Engine --> */}
        <meta name="description" content={t("meta_description_one")} />
        <meta property="og:url" content="https://pointechs.com" />
        <meta name="image" content="android-chrome-512x512.png" />
        {/*<!-- Schema.org for Google --> */}
        <meta itemprop="description" content={t("meta_description_one")} />

        <meta itemprop="image" content="android-chrome-512x512.png" />
        <meta property="og:url" content="https://pointechs.com" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta property="og:title" content={t(metaObji.title)} />
        <meta property="og:description" content={t("meta_description_one")} />
        <meta property="og:image" content="android-chrome-512x512.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="https://pointechs.com" />
        {/*<!----Twitter--> */}
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={t(metaObji.title)} />
        <meta name="twitter:description" content={t("meta_description_one")} />
        <meta name="twitter:image:src" content="android-chrome-512x512.png" />
        <meta name="twitter:url" content="https://pointechs.com" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t("meta_description_one")} />
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
      </Head>
      <div
        className={FAQsStyles["faqs-img"]}
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      ></div>
      <div>
        <div>
          <section>
            <span></span>
            <h1>{t("Frequently Asked Questions")}</h1>
          </section>
          <section>
            {FAQsArr.map((faq) => (
              <Accordion
                defaultActiveKey={faq.id == 0 ? "0" : -1}
                key={faq.id}
                className={FAQsStyles["FAQ-accordion"]}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{faq.q}</Accordion.Header>
                  <Accordion.Body>{faq.a}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default FAQS;
