import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "light" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return null;
};

export default Themetoggle;


// import React, { useEffect, useState } from "react";

// const Themetoggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme"));

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme); 
//   }, [theme == 'light']);

//   // Hapus tombol dan fungsi themetoggle
//   return null;
// };

// export default Themetoggle;
