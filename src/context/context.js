import React, { createContext,useState } from "react";
const UserContext = createContext();
export  function ContextProvider({ children }) {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <UserContext.Provider value={[selectedLink, setSelectedLink]}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;