import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import ProfilePanel from './components/ProfilePanel'
function App() {

  return (
  <div className='w-full h-screen'>
    <Home/>
    {/* <ProfilePanel/> */}
  </div>
  )
}

export default App
