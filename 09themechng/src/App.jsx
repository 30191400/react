import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import ThemeBtn from './components/themebtn'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("ligth");

  const lightTheme = () => {
    setThemeMode("ligth")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.
    remove("dark", "ligth")
    document.querySelector('html').classList.add(themeMode)
  },
    [themeMode])

  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
