import Image from "next/image";
import React, { useEffect,useContext } from "react";
import TermsAndConditionsImg from "../assets/images/terms-and-conditions.webp";
import TermsStyles from "../styles/terms-and-conditions.module.scss";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MetaContext } from "../context/context";
function TermsAndConditions({metaTitle,metaDescription}) {
  const { t } = useTranslation("common");
  const { locale,asPath,pathname } = useRouter();
  const [metaObji,setMetaObji] = useContext(MetaContext);
  const highlightTermsArr = [
    {id:0,highlightTerm:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {id:1,highlightTerm:'Libero justo laoreet sit amet.'},
    {id:2,highlightTerm:'Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.'},
    {id:3,highlightTerm:'Auctor neque vitae tempus quam pellentesque nec.'},
    {id:4,highlightTerm:'Cras adipiscing enim eu turpis egestas pretium aenean.'}
  ]
  useEffect(()=>{
    setMetaObji((prev)=>({
      ...prev,
      title:"Pointechs | Terms and Conditions"
    }))
  },[]);

  return (
    <>
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
        <meta name="image" content="apple-icon-120x120.png" />
        {/*<!-- Schema.org for Google --> */}
        <meta itemProp="description" content={t(metaDescription)} />

        <meta itemProp="image" content="apple-icon-120x120.png" />
        <meta property="og:url" content="https://pointechs.com" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta property="og:title" content={t(metaTitle)} />
        <meta property="og:description" content={t(metaDescription)} />
        <meta property="og:image" content="apple-icon-120x120.png" />
        <meta property="og:image" content="https://www.pointechs.com/apple-icon-120x120.png"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="https://pointechs.com" />
        {/*<!----Twitter--> */}
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={t(metaTitle)} />
        <meta name="twitter:description" content={t(metaDescription)} />
        <meta name="twitter:image:src" content="https://www.pointechs.com/apple-icon-120x120.png" />
        <meta name="twitter:url" content="https://pointechs.com" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t(metaDescription)} />
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
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
export async function getServerSideProps({ locale,resolvedUrl,query  }) {
  const {section} = query
  if(resolvedUrl == "/terms-and-conditions" && section == null){
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
        metaTitle:"Pointechs | Terms and Conditions",
        metaDescription:"meta_description_one"
      },
    }
  }else if (section == 'contact-us'){
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
        metaTitle:"Pointechs | contact-us",
        metaDescription:"meta_description_one"
      },
    }
  }
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
