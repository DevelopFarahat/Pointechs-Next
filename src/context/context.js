import React, { createContext,useState } from "react";
import { useTranslation } from "next-i18next";
const UserContext = createContext();
const MetaContext = createContext();
export  function ContextProvider({ children }) {
  const { t } = useTranslation("common");
  const [selectedLink, setSelectedLink] = useState(0);
  const [metaObji,setMetaObji] = useState({
    title:"Pointechs",
    description:`Pointechs is a cutting-edge technology company that offers a unique and innovative loyalty program for merchants. Our mission is to help businesses increase their revenue and grow their customer base through personalized engagement`
  })
  const [contactUsMeta,setContactUsMeta] = useState({
    title:""
  })
  return (
    <MetaContext.Provider value={[metaObji,setMetaObji]}>
     <UserContext.Provider value={[selectedLink, setSelectedLink]}>
      {children}
    </UserContext.Provider>
    </MetaContext.Provider>
   
  );
}
export  {UserContext,MetaContext};