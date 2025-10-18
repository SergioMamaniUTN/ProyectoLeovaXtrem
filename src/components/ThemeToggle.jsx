import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // Lee del localStorage (si el usuario ya eligió antes)
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Aplica la clase al <html> según el estado
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      title="Cambiar tema"
      aria-label="Cambiar tema"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
