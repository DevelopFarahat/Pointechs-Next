import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import LoginStyles from "../styles/login.module.scss";
import LoginImg from "../assets/images/login.webp";
import Image from "next/image";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function Login(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [tooglePassword, setTooglePassword] = useState("password");
  const passwordRef = useRef();
  const [userData,setUserData] = useState({
    email:"",
    password:""
  });
  const [errors,setErrors] = useState({
    emailError:"",
    passwordError:""
  })
  const handleUserData = (event)=>{
    setUserData({
      ...userData,
      [event.target.name]:event.target.value
    })
    handleError(event.target.name,event.target.value)
  }
  const handleError = (field,value)=>{
    if (field == "email") {
      const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i;
      setErrors({
        ...errors,
        emailError:
          value.length == 0
            ? t("email is required")
            : emailRegx.test(value)
            ? ""
            : t("email address should have the format username@domain.com and should not contain any spaces or special characters other than . - _ +"),
      });
    }else{
      const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      setErrors({
        ...errors,
        passwordError:
          value.length == 0
            ? t("password is required")
            : passwordRegx.test(value)
            ? ""
            : t("password must be a  Minimum eight characters, at least one letter and one number"),
      });
    }
  }
  const handleInputType = (event) => {
    event.stopPropagation();
    if (tooglePassword == "password") {
      setTooglePassword("text");
    } else {
      setTooglePassword("password");
    }
  };
  const focus = () => {
    passwordRef.current.style.cssText = "outline:1px solid #FEB247";
  };
  const blur = () => {
    passwordRef.current.style.cssText = "outline:none";
  };
  const navigateToSignupForm = () => {
    props.onHide();

    props.setSignupModalShow(true);
  };
  const handleHideLoginForm  = ()=>{
    setUserData({
      email:'',
      password:''
    })
    setErrors({
      emailError:'',
      passwordError:''
    })
    props.onHide();
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    for(let key in userData){
      if(userData[key] == "")return
    }
    for(let key in errors){
      if(errors[key] != "")return
    }

    console.log(userData);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={LoginStyles["login-body-modal"]}>
        <section className={LoginStyles["login-img-section"]}>
          <Image src={LoginImg} loading="lazy" alt="hands types on laptop" />
        </section>
        <section className={LoginStyles["login-form-container"]} style={{direction:locale == 'en'?'ltr':'rtl'}}>
          <div style={{justifyContent:locale == 'en'?'flex-end':'flex-start'}}>
            <span >
              <GrFormClose
                style={{ color: "#27323C" }}
                onClick={handleHideLoginForm}
              />
            </span>
          </div>
          <div>
            <h1>{t("Log in")}</h1>
            <form className={LoginStyles["login-form"]} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">{t("Email Address")}</label>
                <input type="text" name="email" id="email" className={`${errors.emailError?'input-is-invalid':''}`} value={userData.email} onBlur={handleUserData} onChange={handleUserData}/>
                <small  className={`text-danger errorMessage`} style={{textAlign:locale == 'en'?'left':'right'}}>{errors.emailError}</small>
              </div>
              <div>
                <label htmlFor="password">{t("Password")}</label>
                <div>
                  <div  onFocus={focus} onBlur={blur} ref={passwordRef} className={`${errors.passwordError?'input-is-invalid':''}`}>
                  <input type={tooglePassword} name="password" id="password"  value={userData.password} onBlur={handleUserData} onChange={handleUserData}/>
                  <div onClick={handleInputType} style={{ cursor: "pointer" }}>
                    {tooglePassword == "password" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    )}
                  </div>
                  </div>
                  <small  className={`text-danger errorMessage`} style={{textAlign:locale == 'en'?'left':'right'}}>{errors.passwordError}</small>
                </div>
                
                <Link
                  className={LoginStyles["forget-password-link"]}
                  href={"#"}
                  style={{textAlign:locale == 'en'?'left':'right'}}
                >
                  {t("Forget Password")}
                </Link>
              </div>
              <div className={LoginStyles["separator"]}></div>
              <button type="submit" className="btn">
                {t("Login")}
              </button>
              <Link className={LoginStyles["register-now-link"]} href={"#"}>
                {t("Create an account")}<span onClick={navigateToSignupForm}>{t("Register Now")}</span>
              </Link>
            </form>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
