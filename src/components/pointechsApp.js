import React from "react";
import PointechsAppStyles from "../styles/pointechsApp.module.scss";
import PointechsAppImg from "../assets/images/pointechs-app.webp";
import Image from "next/image";
import {BsApple} from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa";

function PointechsApp() {
  
  return (
    <div className={PointechsAppStyles["pointechs-app"]} >
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
            <a rol="button" href="https://apps.apple.com/us/app/id1504083441" target="_blank" className={`btn ${PointechsAppStyles['link-btn']}`}>
                <BsApple style={{fontSize:'32px'}}/>
                <div>
                <span>Download on the</span>
                <span> App Store</span>
                </div>
           
            </a>
            <a role="button" href="https://play.google.com/store/apps/details?id=com.accuragroup.pointechs" target="_blank" className={`btn ${PointechsAppStyles['link-btn']}`}>
             
             {/* <Image src={GooglePlayIcon} alt="google-play-icon"/>*/}
             <FaGooglePlay style={{fontSize:'32px'}}/>
               <div>
               <span>Git it on</span>
                <span>   Google Play</span>
               </div>
              

            </a>
          </section>
        </div>
        <div>
          <Image src={PointechsAppImg} loading="lazy" alt="pointechs-app" />
        </div>
      </main>
    </div>
  );
}

export default PointechsApp;
