// Settings Context - src/context/Settings
import { createContext, useState, Children } from "react";
import { IThemeContextValue } from "../interfaces/themeContextValue";
import { Theme } from "../interfaces/theme";

const ThemeContext = createContext<IThemeContextValue | null>(null);

const defaultContextValue = {
  theme: "light",
};

export const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(
    defaultTheme
  );

  const toggleTheme = (theme: Theme) => {
   setTheme(theme)
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;