import Image from "next/image";
import React from "react";
import TermsAndConditionsImg from "../assets/images/terms-and-conditions.webp";
import TermsStyles from "../styles/terms-and-conditions.module.scss";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from "next-seo";
function TermsAndConditions() {
  const { t } = useTranslation("common");
  const { locale,asPath } = useRouter();
  const highlightTermsArr = [
    {id:0,highlightTerm:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {id:1,highlightTerm:'Libero justo laoreet sit amet.'},
    {id:2,highlightTerm:'Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.'},
    {id:3,highlightTerm:'Auctor neque vitae tempus quam pellentesque nec.'},
    {id:4,highlightTerm:'Cras adipiscing enim eu turpis egestas pretium aenean.'}
  ]
  return (
    <>
      <Head>
        <NextSeo title={`${t("Pointechs")}`}/>
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
      <div className={TermsStyles["terms-main-section"]}></div>
      <div>
        <div>
          <section>
            <span></span>
            <h1>{t("Terms and Conditions")}</h1>
          </section>
          <section>
            <p>
              Probably the most effective way to achieve paragraph unity is to
              express the central idea of the paragraph in a topic sentence.
              Topic sentences are similar to mini thesis statements. Like a
              thesis statement, a topic sentence has a specific main point.
              Whereas the thesis is the main point of the essay, the topic
              sentence is the main point of the paragraph. Like the thesis
              statement, a topic sentence has a unifying function. But a thesis
              statement or topic sentence alone doesn’t guarantee unity. An
              essay is unified if all the paragraphs relate to the thesis,
              whereas a paragraph is unified if all the sentences relate to the
              topic sentence. Note: Not all paragraphs need topic sentences. In
              particular, opening and closing paragraphs, which serve different
              functions from body paragraphs, generally don’t have topic
              sentences.
            </p>
            <ul className={TermsStyles['highlighted-terms']}>
              {highlightTermsArr.map((term)=>(
                <li key={term.id}>{term.highlightTerm}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}
export default TermsAndConditions;
