import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  // Initialize state with saved theme or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      document.body.classList.toggle("dark", isDark);
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <MdLightMode className="text-xl text-yellow-400" />
      ) : (
        <MdDarkMode className="text-xl text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;