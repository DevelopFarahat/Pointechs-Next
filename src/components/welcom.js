import React, { useRef, useState } from "react";
import WelcomeStyles from "../styles/welocme.module.scss";
import "vidstack/styles/defaults.css";

import {
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
  MediaPlayButton,
} from "@vidstack/react";
import Image from "next/image";
import { useTranslation } from 'next-i18next'

function Welcome() {

  const [isCustomePlayVideoVisible, setIsCustomePlayVideoVisible] =
    useState(true);
  const mediaRef = useRef();

  function onMediaPlay() {
    setIsCustomePlayVideoVisible(false);
    mediaRef.current.setAttribute("controls", true);
  }
  return (
    <div className={WelcomeStyles["pointechs-welcome"]} id="about-us">
      <div>
      <div>
        <MediaPlayer
          src="/videos/Pointechs.mp4"
          poster="/video-poster.png"
          type="video/mp4"
          ref={mediaRef}
          className={WelcomeStyles["media"]}
        >
          <MediaPlayButton className={WelcomeStyles["media-play-btn"]}>
            {isCustomePlayVideoVisible ? (
              <Image
                src="play.svg"
                alt="play"
                width="100"
                height={"100"}
                onClick={onMediaPlay}
              />
            ) : null}
          </MediaPlayButton>

          <MediaOutlet />
        </MediaPlayer>
      </div>
      <div className={WelcomeStyles['welcom-pointechs']}>
        <section>
            <span></span>
            <h1>Welcome to Pointechs</h1>
        </section>
        <section>
          <p>
            The ultimate loyalty program solution for businesses of all sizes.
            Our innovative platform is designed to help you build long-lasting
            relationships with your customers, increase sales, and drive
            sustainable growth.
          </p>
          <p>
            Our platform is designed to build a relationship between merchants
            and their customers by providing a portal that allows merchants to
            track their loyalty program, as well as a mobile app for customers
            to view their points and redeem them in real-time.
          </p>
          <p>
            The portal features a loyalty dashboard that merchants can use to
            track customer engagement, redemption rates, and overall business
            growth.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
