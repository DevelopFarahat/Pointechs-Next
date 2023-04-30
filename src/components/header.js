import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../assets/images/logo.webp";
import NavbarStyles from "../styles/navbar.module.scss";
const DynamicSignup = dynamic(() => import("./signup"), { ssr: false });
const DynamicLogin = dynamic(() => import("./login"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
function Header() {
  const { t } = useTranslation("common");
  const router = useRouter();
  let { locale, locales, push, query, asPath, pathname } = router;
  const [lang, setLang] = useState("en");
  const [selectedLink, setSelectedLink] = useState(0);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // initial state is expanded
  const navbarRef = useRef();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 56) {
        navbarRef.current.classList.add(NavbarStyles["drop-shadow"]);
      } else if (window.scrollY < 56 && isExpanded) {
        navbarRef.current.classList.remove(NavbarStyles["drop-shadow"]);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksArr = [
    { id: 0, href: "#home", data: t("Home") },
    { id: 1, href: "#about-us", data: t("About us") },
    { id: 2, href: "#our-features", data: t("Our features") },
    { id: 3, href: "#why-us", data: t("Why us?") },
    { id: 4, href: "#how-it-works", data: t("How it works") },
    { id: 5, href: "#contact-us", data: t("Contact us") },
  ];
  const handleSelectLink = (event) => {
    
    event.preventDefault();
    setSelectedLink(event.currentTarget.id);
    if(pathname == "/"){
      document
      .getElementById(event.currentTarget.getAttribute("href").substring(1))
      .scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    push(
      `/?section=${event.currentTarget.getAttribute("href").substring(1)}`,
      undefined,
      { shallow: true }
    );
    }
    

  };
  const handleOnToogleStyles = (isNavbarExpanded) => {
    if (isNavbarExpanded) {
      navbarRef.current.classList.add(NavbarStyles["drop-shadow"]);
      
    } else {
      navbarRef.current.classList.remove(NavbarStyles["drop-shadow"]);
    }
   
  };
 

  const toggleLang = (event) => {
    //event.stopPropagation();
    const locale = lang == "en" ? "ar" : "en"; // Use a ternary operator to assign locale
    setLang(locale); // Update the state with the new locale
    router.push(`/${locale}${pathname}`, `/${locale}${asPath}`, {
      locale,
      scroll: false,
    }); // Use template literals to interpolate variables
    handleToggle();
  };
  const handleToggle = () => {
    if(window.innerWidth <=1200)
    setIsExpanded(!isExpanded); // toggle the state variable
  };

  const handleModalVisibility = (event)=>{
    if(event.target.id == 'login-btn'){
      setLoginModalShow(true);
      
    }else{
      setSignupModalShow(true);
      
    }
    handleToggle();
  }
  return (
    <>
      <Navbar
        ref={navbarRef}
        expand={"xl"}
        className={NavbarStyles["pointechs-navbar"]}
        onToggle={handleOnToogleStyles}
        onSelect={handleToggle}
        expanded={isExpanded}
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      >
        <Container className={NavbarStyles["navbar-container"]}>
          <Navbar.Brand>
            <Link href={"/"} locale={locale}>
              <Image
                src={Logo}
                className={NavbarStyles.logo}
                alt="logo"
                priority={true}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={NavbarStyles.nav}>
              {linksArr.map((link) => (
                <Nav.Link
                  style={{ textAlign: locale == "en" ? "left" : "right" }}
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  onClick={handleSelectLink}
                  className={`${
                    selectedLink == link.id
                      ? NavbarStyles["activated-link"]
                      : ""
                  }`}
                >
                  {link.data}
                </Nav.Link>
              ))}
            </Nav>
            <div className={NavbarStyles["btn-container"]}>
              <button
                type="button"
                className={` btn ${NavbarStyles["btn-lang"]} `}
           
                onClick={toggleLang}
              >
                <span>{lang == "en" ? "العربية" : "En"}</span>
              </button>
              <button
                type="button"
                id="login-btn"
                className={` btn  ${NavbarStyles["btn-login"]} `}
                onClick={handleModalVisibility}
              >
                {t("Log In")}
              </button>
              <button
                type="button"
                id="signup-btn"
                className={` btn ${NavbarStyles["btn-get-started"]} `}
                onClick={handleModalVisibility}
              >
                {t("Get Started")}
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DynamicSignup
        show={signupModalShow}
        setLoginModalShow={setLoginModalShow}
        onHide={() => setSignupModalShow(false)}
      />
      <DynamicLogin
        show={loginModalShow}
        setSignupModalShow={setSignupModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
}

export default Header;
