// import React, { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-200 text-black dark:text-white shadow transition duration-300 hover:scale-105"
//       aria-label="Toggle Theme"
//     >
//       {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
//     </button>
//   );
// };

// export default ThemeToggle;
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700 dark:text-gray-300">Theme</span>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300`}
      >
        <span
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
