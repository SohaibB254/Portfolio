import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
  const [rotating, setRotating] = useState(false);
  const { theme, toggleTheme } = useTheme()
  const handleClick = () => {
    setRotating(true);
    toggleTheme();

    // Reset rotation state after animation ends
    setTimeout(() => setRotating(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      className="transition-transform duration-500 transform origin-center"
    >
      {theme === "light" ? (
        <Sun
          className={`${rotating ? "rotate-90" : ""} transition-transform duration-500`}
          size={18}
          strokeWidth={1}
        />
      ) : (
        <Moon
          className={`${rotating ? "rotate-90" : ""} transition-transform duration-500`}
          size={18}
          strokeWidth={1}
        />
      )}
    </button>
  );
}
