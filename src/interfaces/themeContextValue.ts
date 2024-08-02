import { Theme } from "./theme";

export interface IThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}