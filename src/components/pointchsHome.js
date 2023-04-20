import React from "react";
import PointchsHomeStyles from "../styles/pointchsHome.module.scss";
import Image from "next/image";
import PointchsImage from "../assets/images/BG-img.png";
import { RiArrowDropRightLine } from "react-icons/ri";
function PointchsHome() {
  return (
    <div className={PointchsHomeStyles["pointchs-home"]} id="home">
      <div>
        <div>
          <p>
            GROW YOUR BUSINESS<br/> WITH <span>POINTECHS</span>
          </p>
          <p>The Easiest Way to Reward<br/> Your Customers</p>
          <button
            type="button"
            className={`btn ${PointchsHomeStyles["btn-get-started-now"]}`}
          >
            Get Started Now{" "}
            <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
          </button>
        </div>
      </div>
     {/* <div>
        <Image src={PointchsImage} className={PointchsHomeStyles['pointchs-home-img']}/>
      </div>*/}
    </div>
  );
}

export default PointchsHome;
