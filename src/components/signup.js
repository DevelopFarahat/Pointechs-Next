import React, { useEffect, useRef, useState } from "react";
import SignupStyles from "../styles/signup.module.scss";
import Button from "react-bootstrap/Button";
import Head from "next/head";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import signupImg from "../assets/images/person.webp";
import { GrFormClose } from "react-icons/gr";
import Select from "react-select";
import axios from "axios";
import { Form } from "react-bootstrap";
import { MdConveyorBelt } from "react-icons/md";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
function Signup(props) {
  const { t } = useTranslation("common");
  const { locale,pathname,asPath,query,push } = useRouter();
  const [activeTap, setActiveTap] = useState({
    personalInfoTapVisible: true,
    accountDetailsTapVisible: false,
  });
  const [termsOfServiceChecked, setTermsOfServiceChecked] = useState(false);
  const [countriesArr, setCountriesArr] = useState([]);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [tooglePassword, setTooglePassword] = useState("password");
  const [toogleConfirmPassword, setToogleConfirmPassword] =
    useState("password");
  const [errors, setErrors] = useState({
    fullnameError: "",
    emailError: "",
    dialCodeError: "",
    phoneError: "",
    passwordError: "",
    confirmPasswordError: "",
    countryNameError: "",
    categoryError: "",
    storeNameEnError: "",
    storeNameArError: "",
    termsOfServiceStatusError: "",
  });
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    dialCode: "+20",
    phone: "",
    password: "",
    confirmPassword: "",
    countryName: "Egypt",
    category: "Restaurant",
    storeNameEn: "",
    storeNameAr: "",
    termsOfServiceStatus: false,
  });

  const [isRtl, setIsRtl] = useState(false);
  
  const handleSignupTapsVisibility = (event) => {
    for (let key of Object.keys(userData).splice(0, 6)) {
      if (userData[key] == "") return;
      console.log(userData[key]);
    }
    for (let key of Object.keys(errors).slice(0, 6)) {
      if (errors[key] != "") return;
    }
    event.target.id == "personalInfo"
      ? setActiveTap({
          personalInfoTapVisible: true,
          accountDetailsTapVisible: false,
        })
      : setActiveTap({
          personalInfoTapVisible: false,
          accountDetailsTapVisible: true,
        });
  };
  const categoryArr = [{ id: 0, categoryName: "Restaurant" }];
  const COUNTRIES_EN = "/json/countries_en.json";
  const COUNTRIES_AR = "/json/countries_ar.json";
  useEffect(() => {
    let featch = true;
    (async () => {
      axios
        .get(`${locale == 'en'?COUNTRIES_EN:COUNTRIES_AR}`)
        .then((res) => {
          setCountriesArr(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
        if(locale == 'en')
        setIsRtl(false);
        else setIsRtl(true);
    })();
    const { status } = query;
    if (status == "signup-popup") {
      const { setSignupModalShow } = props;
      if (setSignupModalShow != undefined) setSignupModalShow(true);
    }
    return () => featch = false;

  }, [locale]);
  const focus = (element) => {
    if (element.target.id == "password") {
      passwordRef.current.style.cssText = "outline:1px solid #FEB247";
    } else {
      confirmPasswordRef.current.style.cssText = "outline:1px solid #FEB247";
    }
  };
  const blur = (element) => {
    if (element.target.id == "password") {
      passwordRef.current.style.cssText = "outline:none";
    } else {
      confirmPasswordRef.current.style.cssText = "outline:none";
    }
  };
  const handleInputType = (event) => {
    event.stopPropagation();

    if (event.currentTarget.id == "pass") {
      if (tooglePassword == "password") {
        setTooglePassword("text");
      } else {
        setTooglePassword("password");
      }
    } else {
      if (toogleConfirmPassword == "password") {
        setToogleConfirmPassword("text");
      } else {
        setToogleConfirmPassword("password");
      }
    }
  };

  const handleUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    errorHandle(event.target.name, event.target.value);
  };
  const handlePhoneDialCodeSelect = (selectedOption) => {
    setUserData((previous) => ({
      ...previous,
      dialCode: selectedOption.dialCode,
    }));
  };
  const handleCountryNameSelect = (selectedOption) => {
    setUserData((previous) => ({
      ...previous,
      countryName: selectedOption.name,
    }));
  };
  const handleCategorySelect = (selectedOption) => {
    setUserData((previous) => ({
      ...previous,
      countryName: selectedOption.categoryName,
    }));
  };
  const handleTermsOfServiceStatus = (event) => {
    setTermsOfServiceChecked((previous) => !previous);
    if (event.target.checked) {
      setUserData((previous) => ({
        ...userData,
        termsOfServiceStatus: true,
      }));
    } else {
      setUserData((previous) => ({
        ...userData,
        termsOfServiceStatus: false,
      }));
    }
  };
  const errorHandle = (field, value) => {
    if (field == "fullname") {
      const fullnameRegx = /[a-z A-Z]{3,}\s*$/;
      setErrors({
        ...errors,
        fullnameError:
          value.length == 0
            ? t("fullname is required")
            : fullnameRegx.test(value)
            ? ""
            : t("Name must consist of only uppercase or lowercase letters"),
      });
    } else if (field == "email") {
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
    } else if (field == "phone") {
      setErrors({
        ...errors,
        phoneError:
          value.length == 0
            ? t("phone number is required")
            : value.length == 0 && userData.dialCode == ""
            ? t("phone number with dial code is required")
            : "",
      });
    } else if (field == "password") {
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
    } else if (field == "confirmPassword") {
      const confirmPasswordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      setErrors({
        ...errors,
        confirmPasswordError:
          value.length == 0
            ? t("confirm password is required")
            : value != userData.password
            ? t("confirm password must equale to password")
            : "",
      });
    } else if (field == "storeNameEn") {
      const storeNameEnRegx = /[a-z A-Z]{3,}\s*$/;
      setErrors({
        ...errors,
        storeNameEnError:
          value.length == 0
            ? t("store name is required in english")
            : storeNameEnRegx.test(value)
            ? ""
            : t("store name  must consist of only uppercase or lowercase letters"),
      });
    } else if (field == "storeNameAr") {
      const storeNameArRegx = /[\u0600-\u06FF\u0750-\u077F]/;
      setErrors({
        ...errors,
        storeNameArError:
          value.length == 0
            ? t("store name is required with arabic")
            : storeNameArRegx.test(value)
            ? ""
            : t("store name must be arabic"),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (activeTap.personalInfoTapVisible) {
      for (let key of Object.keys(userData).splice(0, 6)) {
        if (userData[key] == "")return;
      }
      for (let key of Object.keys(errors).slice(0, 6)) {
        if (errors[key] != "") return;
      }
      setActiveTap({
        personalInfoTapVisible: false,
        accountDetailsTapVisible: true,
      });
    } else {
      for (let key in userData) {
        if (userData[key] == " ") return;
      }
      for (let key in errors) {
        if (errors[key] != "") return;
      }
      console.log(userData);
    }
  };
  const handleOnHide = () => {
    push(`/${locale}${pathname}`, undefined, {
      locale,
      scroll: false,
    }); // Use template literals to interpolate variables
    setUserData({
      fullname: "",
      email: "",
      dialCode: "+20",
      phone: "",
      password: "",
      confirmPassword: "",
      countryName: "Egypt",
      category: "Restaurant",
      storeNameEn: "",
      storeNameAr: "",
      termsOfServiceStatus: false,
    });
    setErrors({
      fullnameError: "",
      emailError: "",
      dialCodeError: "",
      phoneError: "",
      passwordError: "",
      confirmPasswordError: "",
      countryNameError: "",
      categoryError: "",
      storeNameEnError: "",
      storeNameArError: "",
      termsOfServiceStatusError: "",
    });
    props.onHide();
  };
  const navigateToSignInForm = ()=>{
    props.onHide();
    props.setLoginModalShow(true);
  }
  const customSelectPhoneCodeStyles = {

    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#212529",
      backgroundColor: state.isSelected ? "#FFFFFF" : "#FFFFFF",
      padding: state.isSelected ? "10px" : "10px",
      
      "&:hover": {
        backgroundColor: "#FEB247",
        color: "#FFFFFF",
        cursor: "pointer",
      },
    }),
    /*
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#5E5E5E",
      border: "none",
      boxShadow: "none",
      width:'100% !important'
    }),
    */
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#000000",
      fontSize: "1rem",
      fontFamily: "Poppins",
    }),

    menu: (base) => ({
      ...base,
      width: "max-content",
      minWidth: "100%",
      textAlign: "start",
      fontFamily: "Poppins",
      fontSize: "1rem",
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }),
  };

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#212529",
      backgroundColor: state.isSelected ? "#FFFFFF" : "#FFFFFF",
      padding: state.isSelected ? "10px" : "10px",
      "&:hover": {
        backgroundColor: "#FEB247",
        color: "#FFFFFF",
        cursor: "pointer",
      },
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#000000",
      fontSize: "1rem",
      fontFamily: "Poppins",
    }),
    
    menu: (base) => ({
      ...base,
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
 }),
 
  };
  const navigateToTermsAndConditions = ()=>{
    event.preventDefault();
    push("/terms-and-conditions",undefined,{locale});
    props.onHide(true);
  }
  return (
<>
<Head>
        <title>{t("Pointechs")} </title>
        <meta name="description" content={t("meta_description_one")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mohamed Farahat " />
        <meta name="audience" content="all" />
        {/* <!-- Search Engine --> */}
        <meta name="description" content={t("meta_description_one")} />
        <meta property="og:url" content="https://pointechs.com" />
        <meta name="image" content="android-chrome-192x192.png" />
        {/*<!-- Schema.org for Google --> */}
        <meta itemprop="description" content={t("meta_description_one")} />

        <meta itemprop="image" content="android-chrome-192x192.png" />
        <meta property="og:url" content="Pointechs | بوينتكس " />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta property="og:title" content="Pointechs | بوينتكس " />
        <meta property="og:description" content={t("meta_description_one")} />
        <meta property="og:image" content="android-chrome-192x192.png" />
        <meta property="og:image:width" content="300px" />
        <meta property="og:image:height" content="300px" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pointechs | بوينتكس " />
        <meta property="og:url" content="Pointechs | بوينتكس " />
        {/*<!----Twitter--> */}
        <meta name="twitter:title" content="Pointechs | بوينتكس " />
        <meta name="twitter:description" content={t("meta_description_one")} />
        <meta name="twitter:image" content="android-chrome-192x192.png" />
        <meta name="twitter:url" content="Pointechs | بوينتكس " />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={t("meta_description_one")} />
        <meta
          name="keywords"
          content="pointechs, loyalty cards, digital loyalty cards,points,stamps,discount,coupons,Promotional Offers,Tiers program,Customer analytics,Business information,Customer Feedback,revenue ,merchants ,customers,business,sales,merchant,benefits,rewards,بوينتكس,نقاط,مكافات,ادارة الولاء,عملاء,تجار,ارباح,فوائد,تتبع النقاط,بطاقات الولاء الرقمية,;,كوبونات الخصم,العروض الترويجية,تحليلات العملاء"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={SignupStyles["signup-model-body"]}>
        <section className={SignupStyles["signup-img-container"]}>
          <Image
            src={signupImg}
            loading="lazy"
            alt="person with laptop setting on desk"
          />
        </section>
        <section className={SignupStyles["signup-form-container"]} style={{direction:locale == 'en'?'ltr':'rtl'}}>
          <div style={{justifyContent:locale == 'en'?'flex-end':'flex-start'}}>
            <span onClick={handleOnHide}>
              <GrFormClose
                style={{ color: "#27323C" }}
                
              />
            </span>
          </div>
          <form className={SignupStyles["signup-form"]} onSubmit={handleSubmit}>
            <h1>{t("Sign up")}</h1>
            <section className={SignupStyles["signup-settings-header"]}>
              <span
                id="personalInfo"
                className={`${
                  activeTap.personalInfoTapVisible
                    ? SignupStyles["active-tap"]
                    : ""
                }`}
                onClick={handleSignupTapsVisibility}
                style={{textAlign:locale == 'en'?'left':'right'}}
              >
                {t("Personal Info")}
              </span>
              <span
                id="accountDetails"
                className={`${
                  activeTap.accountDetailsTapVisible
                    ? SignupStyles["active-tap"]
                    : ""
                }`}
                onClick={handleSignupTapsVisibility}
                style={{
                  cursor:
                    userData.fullname == "" ||
                    userData.email == "" ||
                    userData.phone == "" ||
                    userData.password == "" ||
                    userData.confirmPassword == "" ||
                    errors.fullnameError != "" ||
                    errors.emailError != "" ||
                    errors.phoneError != "" ||
                    errors.passwordError != "" ||
                    errors.confirmPasswordError != ""
                      ? "not-allowed"
                      : "text",
                      textAlign:locale == 'en'?'left':'right'
                }}
              >
                {t("Account Details")}
              </span>
            </section>
            {activeTap.personalInfoTapVisible ? (
              <div className={SignupStyles["personal-info"]}>
                <div>
                  <label htmlFor="fullname">{t("Full Name")}</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className={`${
                      errors.fullnameError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                    value={userData.fullname}
                    onBlur={handleUserData}
                    onChange={handleUserData}
                  />
                  <small className={`text-danger`}>
                    {errors.fullnameError}
                  </small>
                </div>
                <div>
                  <label htmlFor="email">{t("Email Address")}</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`${
                      errors.emailError ? SignupStyles["input-is-invalid"] : ""
                    }`}
                    value={userData.email}
                    onBlur={handleUserData}
                    onChange={handleUserData}
                  />
                  <small className={`text-danger`}>{errors.emailError}</small>
                </div>
                <div>
                  <label htmlFor="phone">{t("Phone Number")}</label>

                  <section
                    className={` ${
                      SignupStyles["phone-input-select-section"]
                    } ${
                      errors.phoneError ? SignupStyles["input-is-invalid"] : ""
                    }`}
                  >
                    <>
                      <Select
                        className={`basic-select-phone-code ${locale == 'ar'?SignupStyles['country-select-ar']:''}`}
                        classNamePrefix="select"
                        unstyled
                        defaultValue={countriesArr[0]}
                        isSearchable={false}
                        isRtl={isRtl}
                        name="dialCode"
                        id="dialCode"
                        styles={customSelectPhoneCodeStyles}
                        options={countriesArr}
                        onBlur={handleUserData}
                        onChange={handlePhoneDialCodeSelect}
                        formatOptionLabel={(country) => (
                          <div className="country-option">
                            <img
                              src={country.flag}
                              alt="country-image"
                              className={"country-flag"}
                            />
                            <span>{country.dialCode}</span>
                          </div>
                        )}
                      />
                    </>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className={`${locale == 'en'?SignupStyles['phone']:SignupStyles['phone-ar']}`}
                      value={userData.phone}
                      onBlur={handleUserData}
                      onChange={handleUserData}
                    />
                  </section>
                  <small className={`text-danger`}>{errors.phoneError}</small>
                </div>
                <div className={SignupStyles["pass-section"]}>
                  <label htmlFor="password">{t("Password")}</label>
                  <div
                    ref={passwordRef}
                    onFocus={focus}
                    onBlur={blur}
                    className={`${
                      errors.passwordError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                  >
                    <input
                      type={tooglePassword}
                      name="password"
                      id="password"
                      value={userData.password}
                      onBlur={handleUserData}
                      onChange={handleUserData}
                    />
                    <div
                      onClick={handleInputType}
                      style={{ cursor: "pointer" }}
                      id="pass"
                    >
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

                  <small className={`text-danger`}>
                    {errors.passwordError}
                  </small>
                </div>
                <div className={SignupStyles["pass-section"]}>
                  <label htmlFor="confirmPassword">{t("Confirm Password")}</label>
                  <div
                    ref={confirmPasswordRef}
                    onFocus={focus}
                    onBlur={blur}
                    className={`${
                      errors.confirmPasswordError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                  >
                    <input
                      type={toogleConfirmPassword}
                      name="confirmPassword"
                      id="confirmPassword"
                      value={userData.confirmPassword}
                      onBlur={handleUserData}
                      onChange={handleUserData}
                    />
                    <div
                      onClick={handleInputType}
                      style={{ cursor: "pointer" }}
                      id="con-pass"
                    >
                      {toogleConfirmPassword == "password" ? (
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

                  <small className={`text-danger`}>
                    {errors.confirmPasswordError}
                  </small>
                </div>
              </div>
            ) : (
              <div className={SignupStyles["account-details"]}>
                <div>
                  <label htmlFor="country-select">{t("Choose Country")}</label>
                  <Select
                    className={`basic-select-countries-names ${
                      errors.countryNameError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                    classNamePrefix="select"
                    unstyled
                    defaultValue={countriesArr[0]}
                    isRtl={isRtl}
                    isSearchable={false}
                    name="countries"
                    styles={customStyles}
                    options={countriesArr}
                    onBlur={handleUserData}
                    onChange={handleCountryNameSelect}
                    formatOptionLabel={(country) => (
                      <div className="country-option">
                        <span>{country.name}</span>
                      </div>
                    )}
                  />
                  <small className="text-danger">
                    {errors.countryNameError}
                  </small>
                </div>
                <div>
                  <label htmlFor="category-select">{t("Choose Category")}</label>
                  <Select
                    className={`basic-categories-select-names ${
                      errors.categoryError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                    isSearchable={false}
                    classNamePrefix="select"
                    id="category-select"
                    unstyled
                    defaultValue={categoryArr[0]}
                    isRtl={isRtl}
                    name="countries"
                    styles={customStyles}
                    options={categoryArr}
                    onBlur={handleUserData}
                    onChange={handleCategorySelect}
                    formatOptionLabel={(cat) => (
                      <div className="country-option">
                        <span>{cat.categoryName}</span>
                      </div>
                    )}
                  />
                  <small className="text-danger">{errors.categoryError}</small>
                </div>
                <div>
                  <label htmlFor="store-name-ar">{t("Store Name in Arabic")}</label>
                  <input
                    type="text"
                    name="storeNameAr"
                    id="store-name-ar"
                    value={userData.storeNameAr}
                    onBlur={handleUserData}
                    onChange={handleUserData}
                    className={`${
                      errors.storeNameArError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                  />
                  <small className="text-danger">
                    {errors.storeNameArError}
                  </small>
                </div>
                <div>
                  <label id="store-name-en">{t("Your store name")}</label>
                  <input
                    type="text"
                    name="storeNameEn"
                    id="store-name-en"
                    value={userData.storeNameEn}
                    className={`${
                      errors.storeNameEnError
                        ? SignupStyles["input-is-invalid"]
                        : ""
                    }`}
                    onBlur={handleUserData}
                    onChange={handleUserData}
                  />
                  <small className="text-danger">
                    {errors.storeNameEnError}
                  </small>
                </div>
                <div>
                  <Form.Check
                    className={SignupStyles["form-check-input"]}
                    name="termsOfServiceStatus"
                    id="termsOfServiceStatus"
                    value={userData.termsOfServiceStatus}
                    checked={userData.termsOfServiceStatus}
                    onChange={handleTermsOfServiceStatus}
                  />

                  <label htmlFor="termsOfServiceStatus" style={{textAlign:locale == 'en'?'left':'right'}}>
                    {t("By confirming your data, you agree to")}{" "}
                    <Link onClick={navigateToTermsAndConditions} href={"#"}>{t("our terms of service")}</Link>
                  </label>
                </div>
              </div>
            )}

            {/**/}
            <button
              type="submit"
              className={`btn ${SignupStyles["continue-btn"]}`}
              
            >
              {activeTap.personalInfoTapVisible ? t("Continue") : t("Sign Up")}
            </button>
            <span>
              {t("Already have an account")}<a href="#" onClick={navigateToSignInForm}>{t("Sign In")}</a>
            </span>
          </form>
        </section>
      </Modal.Body>
    </Modal>
</>
  );
}

export default Signup;
