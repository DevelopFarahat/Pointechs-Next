import Head from "next/head";

import PointchsHome from "../components/pointchsHome";
import Welcome from "../components/welcom";
import Features from "../components/features";
import WhyPointechs from "../components/whyPointechs";
import HowPointechsWorks from "../components/howPointechsWorks";
import PointechsApp from "../components/pointechsApp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import UserContext from "../context/context";
export default function Home() {
  const { t } = useTranslation("common");
  let { locale } = useRouter();
  
  return (
    <>
    <Head>
    <title>{t("Pointechs")}</title>
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
        <meta property="og:title" content="Pointechs | بوينتكس " />
        <meta property="og:description" content={t("meta_description_one")} />
        <meta property="og:image" content="android-chrome-512x512.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="https://pointechs.com" />
        {/*<!----Twitter--> */}
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content="Pointechs | بوينتكس " />
        <meta name="twitter:description" content={t("meta_description_one")} />
        <meta name="twitter:image" content="android-chrome-512x512.png" />
        <meta name="twitter:url" content="https://pointechs.com" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t("meta_description_one")} />
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
    </Head>
      <div
        className="app"
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      >
        <PointchsHome />
        <Welcome />
        <Features />
        <WhyPointechs />
        <HowPointechsWorks />
        <PointechsApp />
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
