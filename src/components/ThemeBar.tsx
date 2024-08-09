import { use } from "react";
import { ThemeContext } from "../App";

export default function ThemeBar() {
    const themeContext = use(ThemeContext);

    return <nav>
        <button onClick={themeContext.toggleTheme}>{themeContext.theme}</button>
    </nav>
}