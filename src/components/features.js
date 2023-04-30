import React, { useEffect, useState } from "react";
import FeaturesStyles from "../styles/features.module.scss";
import Image from "next/image";
import { TiUser } from "react-icons/ti";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import { GrFormClose } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";
import FeatureSVG from "../assets/images/feature.svg";
function Features() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, query, push, pathname, asPath } = router;
  const [modalShow, setModalShow] = useState(false);
  const [featureModalReadmoreData, setFeatureModalReadmoreData] = useState({});
  const featuresArr = [
    {
      id: 0,
      title: t("Digital Loyalty Cards"),
      details: t("feature_1"),
      moreDetails: [
        t("feature_1"),
        t("feature_1_detial_2"),
        t("feature_1_detial_3"),
      ],
    },
    {
      id: 1,
      title: t("Points, Stamps, and Discount Coupons Programs"),
      details: t("feature_2"),
      moreDetails: [
        t("feature_2"),
        t("feature_2_details_2"),
        t("feature_2_details_3"),
        t("feature_2_details_4"),
        t("feature_2_details_5"),
      ],
    },
    {
      id: 2,
      title: t("Referral and New Customer Growth"),
      details: t("feature_3"),
      moreDetails: [t("feature_3"), t("feature_3_details_2")],
    },
    {
      id: 3,
      title: t("Promotional Offers"),
      details: t("feature_4"),
      moreDetails: [
        "With Pointechs you can publish your offers (e.g.  seasonal offers, new product launches, menu, promotions, etc.) to all Pointechs app users (Not only your customers) for maximum visibility and they will get notified for it.   ",
      ],
    },
    {
      id: 4,
      title: t("Tiers Program"),
      details: t("feature_5"),
      moreDetails: [
        "Pointechs Allow you to categorize your customers based on their spendings to know them well and to customize your loyalty program accordingly, all designed to increase your customers’ retention and satisfaction.",
      ],
    },
    {
      id: 5,
      title: t("Customer Analytics"),
      details: t("feature_6"),
      moreDetails: [t("feature_6"), t("feature_6_details_2")],
    },
    {
      id: 6,
      title: t("Business Information"),
      details: t("feature_7"),
      moreDetails: [
        "Publish your business information, including contact numbers and your branches’ locations, to all app users.",
      ],
    },
    {
      id: 7,
      title: t("Customer Feedback"),
      details: t("feature_8"),
      moreDetails: [t("feature_8"), t("feature_8_details_2")],
    },
  ];
  const handlePopupReadMoreFeature = (event, featureObji) => {
    event.preventDefault();
    push(`/?feature=${featureObji.title}&id=${featureObji.id}`, undefined, {
      shallow: true,
    });
    //push({pathname:'/',query:{'feature':`${featureObji.title}`}},undefined,{shallow:true})
    setModalShow(true);
    setFeatureModalReadmoreData(featureObji);
  };

  const handleCloseReadmoreModal = () => {
    setModalShow(false);
    push(`/${locale}${pathname}`, undefined, { locale, scroll: false });
  };
  useEffect(() => {
    //const {feature} = query;

    if (Object.keys(query).length) {
      if (Object.keys(query)[0] == "feature") {
        setModalShow(true);
        const { id } = query;
        setFeatureModalReadmoreData(featuresArr[Number(id)]);
      }
    }
  }, []);
  return (
    <div className={FeaturesStyles["features"]} id="our-features">
      <div>
        <section>
          <span></span>
          <h1>{t("Features of Pointechs")}</h1>
        </section>
        <section>
          {featuresArr.map((feature) => (
            <div key={feature.id} className={FeaturesStyles["feature"]}>
              <section>
                <div className={FeaturesStyles["feature-icon-container"]}>
                  <Image src={FeatureSVG} loading="lazy" alt="feature" />
                </div>
                <h6 style={{ textAlign: locale == "en" ? "left" : "right" }}>
                  {feature.title}
                </h6>
                <p
                  style={{
                    textAlign: locale == "en" ? "left" : "right",
                    fontSize: locale == "en" ? "1rem" : "1.1rem",
                  }}
                >
                  {feature.details}
                </p>
              </section>
              <section
                style={{ justifyContent: locale == "en" ? "end" : "start" }}
              >
                {feature.moreDetails.length > 1 ? (
                  <span
                    onClick={() => handlePopupReadMoreFeature(event, feature)}
                  >
                    {t("Read More....")}
                  </span>
                ) : (
                  false
                )}
              </section>
            </div>
          ))}
        </section>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleCloseReadmoreModal}
        style={{direction:locale == 'en'?'ltr':'rtl'}}
      >
        <Modal.Body className={FeaturesStyles["feature-readmore-modal"]}>
          <section className={FeaturesStyles["feature-modal-header"]} style={{direction:'ltr'}}>
            <span onClick={handleCloseReadmoreModal}>
              <GrFormClose style={{ color: "#27323C", fontSize: "25px" }} />
            </span>
          </section>

          <section>
            <div>
              <div className={FeaturesStyles["feature-icon-container"]}>
                <Image src={FeatureSVG} alt="feature" />
              </div>
              <h2>{featureModalReadmoreData.title}</h2>
            </div>

            <ul>
              {featureModalReadmoreData.moreDetails?.map((details, index) => (
                <li key={index}>
                  <FaDotCircle style={{flex:'0 0 5%'}} size={"25"}/>
                  <p style={{textAlign:locale == 'en'?'left':'right'}}>{details}</p>
                </li>
              ))}
            </ul>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Features;
