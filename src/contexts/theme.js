import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "#232741",
    color: "#ffffff",
  },
  light: {
    backgroundColor: "#ffffff",
    color: "#232741",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = async () => {
    setIsDark(!isDark);
    // localStorage.setItem("isDark", JSON.stringify(isDark));
  };
  const theme = isDark ? themes.dark : themes.light;

  // useEffect(() => {
  //   const isDark = localStorage.getItem("isDark") === "true";
  //   setIsDark(isDark);
  // }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
