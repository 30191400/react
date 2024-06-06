import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import userContextProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <userContextProvider>
        <h2>hello react from minicontext</h2>
        <Login />
        <Profile />
      </userContextProvider>
    </>
  )
}

export default App

