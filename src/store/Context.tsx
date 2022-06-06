import React, { createContext, useContext } from "react";

//context typescript types
type contextProps = {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
};

const AppContext = createContext<contextProps>({
  isNavOpen: false,
  setIsNavOpen: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);
