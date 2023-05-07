import React, { createContext,useState,useRef } from "react";
import { useTranslation } from "next-i18next";
const UserContext = createContext();
const MetaContext = createContext();
const ComponentRefsContext = createContext({
  onHeaderLinkClick: () => {},
  componentRefs: null,
});
export  function ContextProvider({ children }) {
  const { t } = useTranslation("common");
  const [selectedLink, setSelectedLink] = useState(0);
  const [metaObji,setMetaObji] = useState({
    title:"Pointechs",
    description:`Pointechs is a cutting-edge technology company that offers a unique and innovative loyalty program for merchants. Our mission is to help businesses increase their revenue and grow their customer base through personalized engagement`
  })
  const componentRefs = useRef({
    "home":null,
    "about-us":null,
    "our-features":null,
    "why-us":null,
    "how-it-works":null,
    "contact-us":null
  })
  const handleScrollToTargetSection = (componentId) => {
    const ref = componentRefs.current[componentId];
    if (ref) {
      ref.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      });
    }
  };
  return (
    <ComponentRefsContext.Provider value={{onHeaderLinkClick:handleScrollToTargetSection,componentRefs:componentRefs}}>
    <MetaContext.Provider value={[metaObji,setMetaObji]}>
     <UserContext.Provider value={[selectedLink, setSelectedLink]}>
      {children}
    </UserContext.Provider>
    </MetaContext.Provider>
    </ComponentRefsContext.Provider>

   
  );
}
export  {UserContext,MetaContext,ComponentRefsContext};