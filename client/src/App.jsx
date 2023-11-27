import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
