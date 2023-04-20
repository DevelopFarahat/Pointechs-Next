import React from "react";
import FooterStyles from "../styles/footer.module.scss";
import Image from "next/image";
import logoImg from "../assets/images/logo.png";
import MailIcon from "../assets/images/mail.png";
import pinIcon from "../assets/images/pin.png";
import Link from "next/link";
function Footer() {
  return (
    <div className={FooterStyles["pointechs-footer"]}>
      <section>
        <Image src={logoImg} alt="pointechs-logo" />
        <p>
          Build customized rewards & referrals programs to retain existing
          customers and attract new ones. Join Pointechs today and take the
          first step towards a thriving business.
        </p>
      </section>
      <section>
        <span className={FooterStyles["footer-section-header"]}>Company</span>
        <div className={FooterStyles["footer-link-pages-section-2"]}>
          <div>
            <ul className={FooterStyles["footer-list-of-links"]}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#our-features">Our features</a>
              </li>
              <li>
                <a href="#why-us">Why us?</a>
              </li>
              <li>
                <a href="#how-it-works">How it works?</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className={FooterStyles["footer-list-of-links"]}>
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
              <li>
              <Link href={"/FAQs"}>FAQs</Link>
                {/*<a href="#">FAQs</a>*/}
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
              {/*  <a href="#"></a>*/}
              </li>
              <li>
                
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <span className={FooterStyles["footer-section-header"]}>Contact</span>
        <ul className={FooterStyles["footer-list-of-links"]}>
          <li>
            <Image src={MailIcon} alt="mail" />
            <a href="mailto:info@pointechs.com">info@pointechs.com</a>
          </li>
          <li>
            <Image src={pinIcon} alt="pin" />
            <a
              href="https://www.google.com/maps/place/651+N+Broad+St+%23+201,+Middletown,+DE+19709,+USA/@39.4558755,-75.7174523,17z/data=!3m1!4b1!4m6!3m5!1s0x89c7a079b74b8557:0x6ce80b96a55fea8b!8m2!3d39.4558755!4d-75.7174523!16s%2Fg%2F11nyp4zzfq"
              target="_black"
            >
              651 North Broad Street, Suite 201, Middletown, DE 19709, USA
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
