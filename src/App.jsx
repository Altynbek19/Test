import { useState } from 'react'
import './App.css'
import HeaderView from './components/Header'
import WelcomeView from './components/Welcome'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <HeaderView />
      <WelcomeView />
      <Footer/>
    </>
  )
}

export default App