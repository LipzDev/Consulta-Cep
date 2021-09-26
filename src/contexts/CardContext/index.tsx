import { createContext, useState } from "react";

type ContextProps = {
  children?: React.ReactNode;
};

export const CardContext = createContext({});

export const CardProvider = ({ children }: ContextProps) => {
  const [locale, setLocale] = useState(() => {
    if (typeof window !== "undefined") {
      const itemInStorage = JSON.parse(localStorage.getItem("info") as string);
      if (!itemInStorage) return [];
      return itemInStorage;
    }
  });

  return (
    <CardContext.Provider value={{ locale, setLocale }}>
      {children}
    </CardContext.Provider>
  );
};
