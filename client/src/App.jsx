import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import LoginForm from './components/clients/LoginForm'
import RegisterForm from './components/clients/RegisterForm'
import ContactUsForm from './components/contact-us/ContactUsForm';


function App() {

  return (
    <div className='root'>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/contact-us" element={<ContactUsForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
