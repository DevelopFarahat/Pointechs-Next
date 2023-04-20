import React from "react";
import PointechsAppStyles from "../styles/pointechsApp.module.scss";
import PointechsAppImg from "../assets/images/pointechs-app.png";
import Image from "next/image";
import {BsApple} from "react-icons/bs";
import GooglePlayIcon from "../assets/images/google-play.png";

function PointechsApp() {
  return (
    <div className={PointechsAppStyles["pointechs-app"]}>
      <main>
        <div>
          <section>
            <span></span>
            <h1>Pointechs App</h1>
          </section>
          <section>
            <p>
              We know giving gifts and free points to exchange for cash is the
              best feeling in the world, and we want to make it easy for you to
              do, so download our App and start collecting points.{" "}
            </p>
            <span>Download Our App:</span>
          </section>
          <section>
            <button type="button" className={`btn`}>
                <BsApple style={{fontSize:'32px'}}/>
                <div>
                <span>Download on the</span>
                <span> App Store</span>
                </div>
           
            </button>
            <button type="button" className={`btn`}>
              
                <Image src={GooglePlayIcon} alt="google-play-icon"/>
               <div>
               <span>Git it on</span>
                <span>   Google Play</span>
               </div>
            </button>
          </section>
        </div>
        <div>
          <Image src={PointechsAppImg} alt="pointechs-app" />
        </div>
      </main>
    </div>
  );
}

export default PointechsApp;
