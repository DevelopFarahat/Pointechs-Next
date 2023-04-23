import React from "react";
import FooterStyles from "../styles/footer.module.scss";
import Image from "next/image";
import logoImg from "../assets/images/logo.webp";
import MailIcon from "../assets/images/mail.webp";
import pinIcon from "../assets/images/pin.webp";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
function Footer() {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  return (
    <div className={FooterStyles["pointechs-footer"]} style={{direction:locale=='en'?'ltr':'rtl'}}>
      <main>
      <section>
        <Image src={logoImg} loading="lazy" alt="pointechs-logo" />
        <p>
          Build customized rewards & referrals programs to retain existing
          customers and attract new ones. Join Pointechs today and take the
          first step towards a thriving business.
        </p>
      </section>
      <section>
        <span className={FooterStyles["footer-section-header"]}>{t("Company")}</span>
        <div className={FooterStyles["footer-link-pages-section-2"]}>
          <div>
            <ul className={FooterStyles["footer-list-of-links"]}>
              <li>
                <a href="#home">{t("Home")}</a>
              </li>
              <li>
                <a href="#about-us">{t("About us")}</a>
              </li>
              <li>
                <a href="#our-features">{t("Our features")}</a>
              </li>
              <li>
                <a href="#why-us">{t("Why us?")}</a>
              </li>
              <li>
                <a href="#how-it-works">{t("How it works")}</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className={FooterStyles["footer-list-of-links"]}>
              <li>
                <a href="#contact-us">{t("Contact us")}</a>
              </li>
              <li>
              <Link href={"/FAQs"}>{t("FAQs")}</Link>
                {/*<a href="#">FAQs</a>*/}
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>{t("Terms and Conditions")}</Link>
              {/*  <a href="#"></a>*/}
              </li>
              <li>
                
                <a href="#">{t("Privacy Policy")}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <span className={FooterStyles["footer-section-header"]}>{t("Contact")}</span>
        <ul className={FooterStyles["footer-list-of-links"]}>
          <li>
            <Image src={MailIcon} loading="lazy" alt="mail" />
            <a href="mailto:info@pointechs.com">info@pointechs.com</a>
          </li>
          <li>
            <Image src={pinIcon} loading="lazy" alt="pin" />
            <a
              href="https://www.google.com/maps/place/651+N+Broad+St+%23+201,+Middletown,+DE+19709,+USA/@39.4558755,-75.7174523,17z/data=!3m1!4b1!4m6!3m5!1s0x89c7a079b74b8557:0x6ce80b96a55fea8b!8m2!3d39.4558755!4d-75.7174523!16s%2Fg%2F11nyp4zzfq"
              target="_black"
            >
              651 North Broad Street, Suite 201, Middletown, DE 19709, USA
            </a>
          </li>
        </ul>
      </section>
      </main>
    </div>
  );
}

export default Footer;
