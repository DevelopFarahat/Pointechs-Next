import React from "react";
import PointechsAppStyles from "../styles/pointechsApp.module.scss";
import PointechsAppImg from "../assets/images/pointechs-app.webp";
import Image from "next/image";
import GooglePlayImg from "../assets/images/google-play.webp";
import AppStoreImg from "../assets/images/App-store.webp";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function PointechsApp() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  return (
    <div className={PointechsAppStyles["pointechs-app"]}>
      <main>
        <section>
          <div>
            <section>
              <span></span>
              <h1>{t("Pointechs App")}</h1>
            </section>
            <section>
              <p style={{ textAlign: locale == "en" ? "left" : "right" }}>
                {t("pointechs-app-p")}{" "}
              </p>
            </section>
          </div>
          <div>
            <Image src={PointechsAppImg} loading="lazy" alt="pointechs-app" />
          </div>
        </section>
        <div>
          <span>{t("Download Our App")}</span>
          <section>
            <a
              rol="button"
              href="https://apps.apple.com/us/app/id1504083441"
              target="_blank"
              className={`btn ${PointechsAppStyles["link-btn"]}`}
            >
              <Image src={AppStoreImg} alt="app-store" loading="lazy" />
            </a>
            <a
              role="button"
              href="https://play.google.com/store/apps/details?id=com.accuragroup.pointechs"
              target="_blank"
              className={`btn ${PointechsAppStyles["link-btn"]}`}
            >
              <Image src={GooglePlayImg} alt="google-play" loading="lazy"/>
            </a>
            {/* <a rol="button" href="https://apps.apple.com/us/app/id1504083441" target="_blank" className={`btn ${PointechsAppStyles['link-btn']}`}>
                <BsApple style={{fontSize:'32px'}}/>
                <div>
                <span>Download on the</span>
                <span> App Store</span>
                </div>
           
  </a>*/}
            {/* <a role="button" href="https://play.google.com/store/apps/details?id=com.accuragroup.pointechs" target="_blank" className={`btn ${PointechsAppStyles['link-btn']}`}>
             
            
             <FaGooglePlay style={{fontSize:'32px'}}/>
               <div>
               <span>Git it on</span>
                <span>   Google Play</span>
               </div>
              

</a>*/}
          </section>
        </div>
      </main>
    </div>
  );
}

export default PointechsApp;
