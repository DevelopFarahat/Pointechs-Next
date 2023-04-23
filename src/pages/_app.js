import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.scss";
import FooterTwo from "@/components/footerTwo";
import JoinPointechs from "@/components/joinPointechs";
import Contactus from "@/components/contactus";
import 'bootstrap/scss/bootstrap.scss'
import { appWithTranslation } from 'next-i18next'

const   App = ({ Component, pageProps })=> {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <JoinPointechs />
      <Contactus />
      <Footer />
      <FooterTwo />
    </>
  );
}

export default appWithTranslation(App)