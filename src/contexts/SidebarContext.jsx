import { createContext, useState } from "react";

export const SidebarContext = createContext({});

export default function SidebarContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleClose,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
