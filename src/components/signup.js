import React, { useEffect, useRef, useState } from "react";
import SignupStyles from "../styles/signup.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import signupImg from "../assets/images/person.png";
import { GrFormClose } from "react-icons/gr";
import Select from "react-select";
import axios from "axios";
import { Form } from "react-bootstrap";
import { MdConveyorBelt } from "react-icons/md";

function Signup(props) {
  const [activeTap, setActiveTap] = useState({
    personalInfoTapVisible: true,
    accountDetailsTapVisible: false,
  });
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [tooglePassword, setTooglePassword] = useState("password");
  const [toogleConfirmPassword, setToogleConfirmPassword] =
    useState("password");
  const [errors, setErrors] = useState({
    fullnameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const [countriesArr, setCountriesArr] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const handleSignupTapsVisibility = (event) => {
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
  useEffect(() => {
    let featch = true;
    (async () => {
      axios
        .get(`/json/countries_en.json`)
        .then((res) => {
          setCountriesArr(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
    return () => (featch = false);
  }, []);
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
    errorHandle(event.target.id, event.target.value);
  };
  const errorHandle = (field, value) => {
    if (field == "fullname") {
      const fullnameRegx = /^[a-zA-Z]{3,}$/;
      setErrors({
        ...errors,
        fullnameError:
          value.length == 0
            ? "fullname is required"
            : fullnameRegx.test(value)
            ? null
            : "Name must consist of only uppercase or lowercase letters",
      });
    } else if (field == "email") {
      const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i;
      setErrors({
        ...errors,
        emailError:
          value.length == 0
            ? "email is required"
            : emailRegx.test(value)
            ? null
            : "email address should have the format username@domain.com and should not contain any spaces or special characters other than . - _ +",
      });
    } else if (field == "phone") {
    } else if (field == "password") {
      const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      setErrors({
        ...errors,
        passwordError:
          value.length == 0
            ? "password is required"
            : passwordRegx.test(value)
            ? null
            : "password must be a  Minimum eight characters, at least one letter and one number",
      });
    } else if (field == "confirmPassword") {
      const confirmPasswordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    }
  };
  const customSelectPhoneCodeStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#212529",
      backgroundColor: state.isSelected ? "#FFFFFF" : "#212529",
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
    }),
  };

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#212529",
      backgroundColor: state.isSelected ? "#FFFFFF" : "#212529",
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
    /*
    menu: (base) => ({
      ...base,
      width: "max-content",
      minWidth: "100%",
      textAlign:'start'
 }),
 */
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={SignupStyles["signup-model-body"]}>
        <section className={SignupStyles["signup-img-container"]}>
          <Image src={signupImg} alt="person with laptop setting on desk" />
        </section>
        <section className={SignupStyles["signup-form-container"]}>
          <div>
            <span>
              <GrFormClose
                style={{ color: "#27323C" }}
                onClick={props.onHide}
              />
            </span>
          </div>
          <form className={SignupStyles["signup-form"]}>
            <h1>Sign up</h1>
            <section className={SignupStyles["signup-settings-header"]}>
              <span
                id="personalInfo"
                className={`${
                  activeTap.personalInfoTapVisible
                    ? SignupStyles["active-tap"]
                    : ""
                }`}
                onClick={handleSignupTapsVisibility}
              >
                Personal Info
              </span>
              <span
                id="accountDetails"
                className={`${
                  activeTap.accountDetailsTapVisible
                    ? SignupStyles["active-tap"]
                    : ""
                }`}
                onClick={handleSignupTapsVisibility}
              >
                Account Details
              </span>
            </section>
            <div className={SignupStyles["personal-info"]}>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" id="fullname" />
                <small></small>
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" />
                <small></small>
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>

                <section className={SignupStyles["phone-input-select-section"]}>
                  <>
                    <Select
                      className="basic-select-phone-code"
                      classNamePrefix="select"
                      unstyled
                      defaultValue={countriesArr[62]}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="countries"
                      styles={customSelectPhoneCodeStyles}
                      options={countriesArr}
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
                  <input type="number" name="phoneNumber" id="phoneNumber" />
                </section>
                <small></small>
              </div>
              <div className={SignupStyles["pass-section"]}>
                <label htmlFor="password">Password</label>
                <div ref={passwordRef} onFocus={focus} onBlur={blur}>
                  <input type={tooglePassword} name="password" id="password" />
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

                <small></small>
              </div>
              <div className={SignupStyles["pass-section"]}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div ref={confirmPasswordRef} onFocus={focus} onBlur={blur}>
                  <input
                    type={toogleConfirmPassword}
                    name="confirmPassword"
                    id="confirmPassword"
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

                <small></small>
              </div>
            </div>
            {/*<div className={SignupStyles['account-details']}>
              <div>
                <label htmlFor="country-select">Choose Country</label>
                <Select
                      className="basic-select-countries-names"
                      classNamePrefix="select"
                      unstyled
                      defaultValue={countriesArr[62]}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="countries"
                      styles={customStyles}
                      options={countriesArr}
                      onChange={handleCountriesNamesSelect}
                      formatOptionLabel={(country) => (
                        <div className="country-option">
                          <span>{country.name}</span>
                        </div>
                      )}
                    />
              </div>
              <div>
                <label htmlFor="category-select">Choose Category</label>
                <Select
                      className="basic-categories-select-names"
                      classNamePrefix="select"
                      id="category-select"
                      unstyled
                      defaultValue={categoryArr[0]}
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="countries"
                      styles={customStyles}
                      options={categoryArr}
                      formatOptionLabel={(cat) => (
                        <div className="country-option">
                          <span>{cat.categoryName}</span>
                        </div>
                      )}
                    />
              </div>
              <div>
                <label htmlFor="store-name-ar">Store Name in Arabic</label>
                <input type="text" name="store-name-ar" id="store-name-ar"/>
              </div>
              <div>
                <label id="store-name-en">Your store name</label>
                <input type="text" name="store-name-en" id="store-name-en"/>
              </div>
              <div>
                <Form.Check className={SignupStyles['form-check-input']} name="terms-and-service" id="terms-and-service"/>
               
                <p>By confirming your data, you agree to<span>our terms of service</span></p>
              </div>
                      </div>*/}
            <button
              type="button"
              className={`btn ${SignupStyles["continue-btn"]}`}
            >
              Continue
            </button>
            <span>
              Already have an account?<a href="#">Sign In</a>
            </span>
          </form>
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;
