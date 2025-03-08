import { useState } from "react";
import { DarkThemeToggle } from "flowbite-react";

export default function ModeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = (theme === "light" ? "dark" : "light");
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (


    <button
    onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
    className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded"
  >
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </button>

  
    
  );
}