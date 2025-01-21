"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ModeToggle({ iconClassName = "" }: { iconClassName?: string }) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative w-10 h-10 items-center" onClick={toggleTheme}>
      <Moon
        className={`absolute inset-0 transition-opacity ease-in-out duration-300 ${iconClassName} ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        suppressHydrationWarning
      />
      <Sun
        className={`absolute inset-0 transition-opacity ease-in-out duration-300 ${iconClassName} ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        suppressHydrationWarning
      />
    </div>
  );
}

ModeToggle.displayName = "ModeToggle";

export default ModeToggle;
