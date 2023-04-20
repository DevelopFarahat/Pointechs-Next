import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import NavbarStyles from "../styles/navbar.module.scss";
import Signup from "./signup";
import Login from "./login";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const [selectedLink, setSelectedLink] = useState(0);
  const [signupModalShow, setSignupModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const navbarRef = useRef();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 56) {
        navbarRef.current.style.cssText = `-webkit-backdrop-filter: blur(35px);
        backdrop-filter: blur(35px);`;
      } else if (window.scrollY < 56) {
        navbarRef.current.style = ``;
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const linksArr = [
    { id: 0, href: "#home", data: "Home" },
    { id: 1, href: "#about-us", data: "About us" },
    { id: 2, href: "#our-features", data: "Our features" },
    { id: 3, href: "#why-us", data: "Why us?" },
    { id: 4, href: "#how-it-works", data: "How it works" },
    { id: 5, href: "#contact-us", data: "Contact us" },
  ];
  const handleSelectLink = (event) => {
    setSelectedLink(event.currentTarget.id);
  };
  const handleToogle = (isNavbarExpanded)=>{
    if(isNavbarExpanded){
      navbarRef.current.style.cssText =`-webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(35px);`;
    }else{
      navbarRef.current.style = "";
    }

  }
  const handleSelect = (x)=>{
    console.log(x)
  }
  const navigateToHome = ()=>{
    const router = useRouter();
    router.push("/index")
  }
  return (
    <>
      <Navbar
        ref={navbarRef}
        expand={"xl"}
        className={NavbarStyles["pointechs-navbar"]}
        onToggle={handleToogle}
        collapseOnSelect={handleSelect}
      >
        <Container className={NavbarStyles['navbar-container']}>
          <Navbar.Brand >
            <Link href={"/"}>
            <Image src={Logo} className={NavbarStyles.logo}  alt="logo" priority={true} placeholder={true}/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false"/>
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav className={NavbarStyles.nav}>
              {linksArr.map((link) => (
                <Nav.Link
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
              >
                <span>العربية</span>
              </button>
              <button
                type="button"
                className={` btn  ${NavbarStyles["btn-login"]} `}
                onClick={() => setLoginModalShow(true)}
              >
                Log In
              </button>
              <button
                type="button"
                className={` btn ${NavbarStyles["btn-get-started"]} `}
                onClick={ ()=>setSignupModalShow(true)}
                
              >
                Get Started
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Signup show={signupModalShow} onHide={() => setSignupModalShow(false)} />
      <Login  show={loginModalShow} onHide={()=>setLoginModalShow(false)}/>
    </>
  );
}

export default Header;
