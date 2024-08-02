import './App.css'
import HeadTags from './components/HeadTags'
import LoginForm from './components/LoginForm'
import { ThemeContext } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeContext.Provider value={"dark"}>
      <HeadTags />
      <LoginForm />
    </ThemeContext.Provider>
  )
}

export default App
