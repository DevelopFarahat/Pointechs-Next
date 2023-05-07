import React, { useEffect } from "react";
import FeatureStyles from "../styles/feature.module.scss";
import Modal from "react-bootstrap/Modal";
import { GrFormClose } from "react-icons/gr";
import FeatureSVG from "../assets/images/feature.svg";
import { FaDotCircle } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
function Feature({
  featureModalReadmoreData,
  modalShow,
  handleCloseReadmoreModal,
  setModalShow,
  setFeatureModalReadmoreData,
  featuresArr,
}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, query, push, pathname, asPath } = router;
  useEffect(() => {
    if (Object.keys(query).length) {
      if (Object.keys(query)[0] == "feature") {
        setModalShow(true);
        const { id } = query;
        setFeatureModalReadmoreData(featuresArr[Number(id)]);
      }
    }
  }, []);
  return (
    <>
      <Head></Head>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleCloseReadmoreModal}
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      >
        <Modal.Body className={FeatureStyles["feature-readmore-modal"]}>
          <section
            className={FeatureStyles["feature-modal-header"]}
            style={{ direction: "ltr" }}
          >
            <span onClick={handleCloseReadmoreModal}>
              <GrFormClose style={{ color: "#27323C", fontSize: "25px" }} />
            </span>
          </section>

          <section>
            <div>
              <div className={FeatureStyles["feature-icon-container"]}>
                <Image src={FeatureSVG} alt="feature" />
              </div>
              <h2>{featureModalReadmoreData.title}</h2>
            </div>

            <ul>
              {featureModalReadmoreData.moreDetails?.map((details, index) => (
                <li key={index}>
                  <FaDotCircle style={{ flex: "0 0 5%" }} size={"25"} />
                  <p style={{ textAlign: locale == "en" ? "left" : "right" }}>
                    {details}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Feature;
