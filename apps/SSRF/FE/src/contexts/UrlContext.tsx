import React, { createContext, useContext, useState } from "react";

interface UrlContextType {
  urls: string[];
  addUrl: (url: string) => void;
  removeUrl: (url: string) => void;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [urls, setUrls] = useState<string[]>(["https://meme-api.com/gimme"]);

  const addUrl = (url: string) => {
    setUrls((prevUrls) => [...prevUrls, url]);
  };

  const removeUrl = (url: string) => {
    setUrls((prevUrls) => prevUrls.filter((u) => u !== url));
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, removeUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (context === undefined) {
    throw new Error("useUrlContext must be used within a UrlProvider");
  }
  return context;
};
