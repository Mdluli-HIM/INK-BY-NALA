"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  localStorage.setItem("inked-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getCurrentTheme());
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme =
      getCurrentTheme() === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ink-theme-toggle"
      aria-label={
        mounted
          ? dark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle colour theme"
      }
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span className="ink-theme-toggle__icon" aria-hidden="true">
        {dark ? <Sun /> : <Moon />}
      </span>

      <span className="sr-only">
        {dark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
