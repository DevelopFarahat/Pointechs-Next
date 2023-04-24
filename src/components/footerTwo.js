import React from 'react'
import FooterTwoStyles from "../styles/footerTwo.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function FooterTwo() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  return (
    <footer className={FooterTwoStyles['pointechs-footer-extra-details']}>
    <div>
        <span>{new Date().getFullYear()}{t("Pointechs. All rights reserved")}</span>
        <span>{t("Powered by Kaizen Gate")}</span>
    </div>
  </footer>
  )
}

export default FooterTwo