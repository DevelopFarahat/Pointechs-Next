import React from "react";
import JoinPointechsStyles from "../styles/joinPointechs.module.scss";
import { RiArrowDropRightLine } from "react-icons/ri";
function JoinPointechs() {
  return (
    <div className={JoinPointechsStyles["join-section"]}>
      <div>
        <p>
          Join the Pointechs family today and discover the benefits of a loyalty
          program that truly makes a difference!
        </p>
        <button type="button" className={"btn"}>
          Get Started Now{" "}
          <RiArrowDropRightLine style={{ verticalAlign: "text-bottom" }} />
        </button>
      </div>
    </div>
  );
}

export default JoinPointechs;
