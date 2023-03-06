import React, { useState, useEffect } from "react";

// import React, { useState } from 'react';
export default function ToggleButton() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
 return (
    <div className={`App ${theme}`}>
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none" onClick={toggleTheme}>Toggle Theme</button>
        <h1>Hello, world!</h1>
    </div>
  );
}

// export default function ToggleButton() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   function handleToggleClick() {
//     setIsDarkMode(!isDarkMode);
//   }

//   return (
//     <button
//       className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
//       onClick={handleToggleClick}
//     >
//       {isDarkMode ? "Dark" : "Light"} Mode
//     </button>
//   );
// }


