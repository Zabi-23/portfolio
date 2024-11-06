//src/context/ThemeContext.jsx


import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};


const useTheme = () => {
  return useContext(ThemeContext);
};


export { ThemeProvider, useTheme };



