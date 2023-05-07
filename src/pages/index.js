import Head from "next/head";
import React, { useContext, useRef } from "react";
import PointchsHome from "../components/pointchsHome";
import Welcome from "../components/welcom";
import Features from "../components/features";
import WhyPointechs from "../components/whyPointechs";
import HowPointechsWorks from "../components/howPointechsWorks";
import PointechsApp from "../components/pointechsApp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { UserContext } from "../context/context";
import { MetaContext } from "../context/context";
import { ComponentRefsContext } from "../context/context";
export default function Home({ metaTitle, metaDescription }) {
  const { t } = useTranslation("common");
  let { locale,query } = useRouter();
  const [metaObji, setMetaObji] = useContext(MetaContext);
  const { onHeaderLinkClick, componentRefs } = useContext(ComponentRefsContext);
  return (
    <>
    {console.log(metaTitle)}
      <Head>
        <title>{t(metaObji.title)}</title>
        <meta name="description" content={t(metaDescription)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mohamed Farahat " />
        <meta name="audience" content="all" />
        {/* <!-- Search Engine --> */}
        <meta name="description" content={t(metaDescription)} />
        <meta property="og:url" content="https://pointechs.com" />
        <meta name="image" content="android-chrome-512x512.png" />
        {/*<!-- Schema.org for Google --> */}
        <meta itemProp="description" content={t(metaDescription)} />

        <meta itemProp="image" content="android-chrome-512x512.png" />
        <meta property="og:url" content="https://pointechs.com" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta property="og:title" content={t(metaTitle)} />
        <meta property="og:description" content={t(metaDescription)} />
        <meta property="og:image" content="android-chrome-512x512.png" />
        <meta property="og:image:type" content="image/png" /> 
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="https://pointechs.com" />
        {/*<!----Twitter--> */}
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={t(metaTitle)} />
        <meta name="twitter:description" content={t(metaDescription)} />
        <meta
          name="twitter:image:src"
          content="https://www.pointechs.com/android-chrome-512x512.png"
        />
        <meta name="twitter:url" content="https://pointechs.com" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t(metaDescription)} />
        
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
      </Head>
      <div
        className="app"
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      >
        <PointchsHome
          metaTitle={metaTitle}
          ref={(el) => {
            componentRefs.current["home"] = el;
          }}
          onHeaderLinkClick={onHeaderLinkClick}
        />
        <Welcome
          metaTitle={metaTitle}
          ref={(el) => {
            componentRefs.current["about-us"] = el;
          }}
          onHeaderLinkClick={onHeaderLinkClick}
        />
        <Features
          metaTitle={metaTitle}
          ref={(el) => {
            componentRefs.current["our-features"] = el;
          }}
          onHeaderLinkClick={onHeaderLinkClick}
        />
        <WhyPointechs
          metaTitle={metaTitle}
          ref={(el) => {
            componentRefs.current["why-us"] = el;
          }}
          onHeaderLinkClick={onHeaderLinkClick}
        />
        <HowPointechsWorks
          metaTitle={metaTitle}
          ref={(el) => {
            componentRefs.current["how-it-works"] = el;
          }}
          onHeaderLinkClick={onHeaderLinkClick}
        />
        <PointechsApp />
      </div>
    </>
  );
}

export async function getServerSideProps({ locale, resolvedUrl, query }) {
  const { section, feature, id } = query;
  const featuresArr = [
    {
      id: 0,
      title: "Digital Loyalty Cards",
      details: "feature_1",
      moreDetails: ["feature_1", "feature_1_detial_2", "feature_1_detial_3"],
    },
    {
      id: 1,
      title: "Points, Stamps, and Discount Coupons Programs",
      details: "feature_2",
      moreDetails: [
        "feature_2",
        "feature_2_details_2",
        "feature_2_details_3",
        "feature_2_details_4",
        "feature_2_details_5",
      ],
    },
    {
      id: 2,
      title: "Referral and New Customer Growth",
      details: "feature_3",
      moreDetails: ["feature_3", "feature_3_details_2"],
    },
    {
      id: 5,
      title: "Customer Analytics",
      details: "feature_6",
      moreDetails: ["feature_6", "feature_6_details_2"],
    },

    {
      id: 7,
      title: "Customer Feedback",
      details: "feature_8",
      moreDetails: ["feature_8", "feature_8_details_2"],
    },
  ];
  if (Object.keys(query).length == 0) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "home") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | home",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "about-us") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | about-us",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "our-features") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | our-features",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "why-us") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | why-us",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "how-it-works") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | how-it-works",
        metaDescription: "meta_description_one",
      },
    };
  } else if (section == "contact-us") {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: "Pointechs | contact-us",
        metaDescription: "meta_description_one",
      },
    };
  } else if (feature != undefined) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
        metaTitle: featuresArr[Number(id)].title,
        metaDescription: featuresArr[Number(id)].moreDetails[0],
      },
    };
  } else {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        // Will be passed to the page component as props
      },
    };
  }
}
