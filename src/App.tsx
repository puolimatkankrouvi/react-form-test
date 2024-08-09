import { createContext, useState } from 'react'
import './App.css'
import HeadTags from './components/HeadTags'
import LoginForm from './components/LoginForm'
import ThemeBar from './components/ThemeBar'
import { Theme } from './interfaces/theme'
import { IThemeContextValue } from './interfaces/themeContextValue'

export const ThemeContext = createContext<IThemeContextValue | null>(null);

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  function toggleTheme() {
    setTheme(theme => theme == "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      <HeadTags />
      <ThemeBar />
      <LoginForm />
    </ThemeContext.Provider>
  )
}

export default App
