import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Path from './lib/paths';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import LoginForm from './components/clients/LoginForm';
import RegisterForm from './components/clients/RegisterForm';
import ContactUsForm from './components/contact-us/ContactUsForm';
import Hospital from './components/about/Hospital';
import Doctors from './components/about/Doctors';
import Team from './components/about/Team';


function App() {

  return (
    <div className='root'>
      <Header />

      <main>
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Login} element={<LoginForm />} />
          <Route path={Path.Register} element={<RegisterForm />} />
          <Route path={Path.ContactUs} element={<ContactUsForm />} />
          <Route path={Path.Hospital} element={<Hospital />} />
          <Route path={Path.Doctors} element={<Doctors /> } />
          <Route path={Path.Team} element={<Team /> } />
          
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
