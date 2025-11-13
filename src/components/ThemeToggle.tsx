import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Use stored value, else default to light
    if (localStorage.getItem("theme") === "dark") return true;
    return false;
  });

  // Apply theme whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition-colors shadow hover:shadow-lg"
      title="Toggle theme"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}