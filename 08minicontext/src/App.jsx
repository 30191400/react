import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (

    <UserContextProvider>
      <h2>hello react from minicontext</h2>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App

