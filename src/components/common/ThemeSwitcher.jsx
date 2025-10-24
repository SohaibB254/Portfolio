import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Laptop } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const icon =
    theme === "light" ? (
      <Moon size={18} />
    ) : theme === "dark" ? (
      <Sun size={18} />
    ) : (
      <Laptop size={18} />
    );

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-500 bg-(--shapeLight) hover:scale-105"
      title={`Switch theme (current: ${theme})`}
    >
      {icon}
    </button>
  );
}
