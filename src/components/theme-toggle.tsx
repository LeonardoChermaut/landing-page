import { Button } from "@/src/components/ui/button";
import { useTheme } from "@/src/providers/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme, setTheme]
  );

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleTheme}
      className="w-9 px-0 cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        Tema atual: {theme === "light" ? "Claro" : "Escuro"}
      </span>
    </Button>
  );
};
