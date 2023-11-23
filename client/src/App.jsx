// import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import LoginForm from './components/clients/LoginForm'
import RegisterForm from './components/clients/RegisterForm'


function App() {
  
  return (
      <div className='root'>
        <Header />
        <main>
        <Home />
          <LoginForm />
          <RegisterForm />
        </main>
        
        <Footer />
      </div>
  )
}

export default App
