import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../assets/images/logo.webp";
import NavbarStyles from "../styles/navbar.module.scss";
const DynamicSignup = dynamic(()=>import('./signup'),{ssr:false});
const DynamicLogin = dynamic(()=>import("./login"),{ssr:false});
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import {motion} from "framer-motion";
function Header() {
  const {t} = useTranslation('common');
  const router = useRouter();
  let {locale,locales,push,query,asPath,pathname} = router;
  const [lang,setLang] = useState('en');
  const [selectedLink, setSelectedLink] = useState(0);
  const [signupModalShow, setSignupModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const navbarRef = useRef();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 56) {
        navbarRef.current.classList.add(NavbarStyles["drop-shadow"]);
      } else if (window.scrollY < 56) {
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
    setSelectedLink(event.currentTarget.id);
  };
  const handleToogle = (isNavbarExpanded)=>{
    if(isNavbarExpanded){
      navbarRef.current.classList.add(NavbarStyles["drop-shadow"]);
      
    }else{
      navbarRef.current.classList.remove(NavbarStyles["drop-shadow"]);
    }

  }
  const handleSelect = (x)=>{
    console.log(x)
  }
  const toogleLang = (event)=>{
    event.stopPropagation();
    if(lang == "en"){
      setLang("ar");
        locale = 'en';
       // router.push('/',"/",{locale});
        router.push({ pathname, query },asPath,{locale})

      
        
    }else{
      setLang("en");
      locale = 'ar';
   //   router.push("/","/",{locale});
   router.push({ pathname, query },asPath,{locale})
  

    }
    
  }
  return (
    <>
      <Navbar
        ref={navbarRef}
        expand={"xl"}
        className={NavbarStyles["pointechs-navbar"]}
        onToggle={handleToogle}
        collapseOnSelect={handleSelect}
        style={{direction:locale=="en"?'ltr':'rtl'}}
      >
        <Container className={NavbarStyles['navbar-container']}>
          <Navbar.Brand >
            <Link href={"/"} locale={locale}>
            <Image src={Logo} className={NavbarStyles.logo}   alt="logo" priority={true} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false"/>
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav className={NavbarStyles.nav}>
              {linksArr.map((link) => (
                <Nav.Link
                style={{textAlign:locale == 'en'?'left':'right'}}
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
              <motion.button
                type="button"
                className={` btn ${NavbarStyles["btn-lang"]} `}
               
                whileTap={{scale:.95}}
                
              >
                <span onClick={toogleLang}>{lang == 'en'?"العربية":'En'}</span>
              </motion.button>
              <motion.button
                type="button"
                className={` btn  ${NavbarStyles["btn-login"]} `}
                onClick={() => setLoginModalShow(true)}
                whileHover={{scale:1.1,textShadow:'0px 0px 8px #27323C'}} 
                transition={{type:'spring',stiffness:300}}
              >
                {t("Log In")}
              </motion.button>
              <motion.button
                type="button"
                className={` btn ${NavbarStyles["btn-get-started"]} `}
                onClick={ ()=>setSignupModalShow(true)}
                whileHover={{scale:1.1,textShadow:'0px 0px 8px #FEB247'}} 
                transition={{type:'spring',stiffness:300}}
                
              >
                {t("Get Started")}
              </motion.button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DynamicSignup show={signupModalShow} setLoginModalShow={setLoginModalShow} onHide={()=>setSignupModalShow(false)}/>
    <DynamicLogin show={loginModalShow} setLoginModalShow={setSignupModalShow} onHide={()=>setLoginModalShow(false)}/>
    </>
  );
}

export default Header;
