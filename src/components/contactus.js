import React from "react";
import ContactusStyles from "../styles/contactus.module.scss";
import Image from "next/image";
import ContactusImg from "../assets/images/contact-us.png";
import { RiArrowDropRightLine } from "react-icons/ri";
function Contactus() {
  return (
    <div className={ContactusStyles["pointechs-contactus"]} id="contact-us">
      <main>
        <section>
          <div className={ContactusStyles['contact-us-header']}>
            <section>
              <span></span>
              <h1>Contact Us</h1>
            </section>
            <p>We Will Be Happy To Contact With You.</p>
          </div>
          <form className={ContactusStyles['contactus-form']}>
            <div>
              <input type="text" name="Full Name" id="Full Name" />
              <label htmlFor="Full Name">Full Name</label>
              <small></small>
            </div>
            <div>
         
              <input type="text" name="email" id="email" />
              <label htmlFor="email">Email Address</label>
              <small></small>
            </div>
            <div>
              
              <input type="text" name="message" id="message" />
              <label htmlFor="message">Enter your message here!</label>
              <small></small>
            </div>
            <div>
            <button type="button" className={'btn'}>
              Send Message{" "}
              <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
            </button>
            </div>
        
          </form>
        </section>
        <section>
          <Image src={ContactusImg} alt="contact-us" priority={true} placeholder={true}/>
        </section>
      </main>
    </div>
  );
}

export default Contactus;
