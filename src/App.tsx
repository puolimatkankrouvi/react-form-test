import './App.css'
import LoginForm from './components/LoginForm'
import { ThemeContext } from './interfaces/ThemeContext'

function App() {

  return (
    <ThemeContext.Provider value={"dark"}>
      <LoginForm />
    </ThemeContext.Provider>
  )
}

export default App
