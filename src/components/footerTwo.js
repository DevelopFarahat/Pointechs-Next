import React from 'react'
import FooterTwoStyles from "../styles/footerTwo.module.scss";
function FooterTwo() {
  return (
    <footer className={FooterTwoStyles['pointechs-footer-extra-details']}>
    <div>
        <span>2023 © Pointechs. All rights reserved.</span>
        <span>Powered by Kaizen Gate</span>
    </div>
  </footer>
  )
}

export default FooterTwo