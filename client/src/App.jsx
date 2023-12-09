import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Path from './lib/paths';
import { AuthProvider } from './contexts/authContext';

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
import Services from './components/home/Services';
import Questions from './components/contact-us/Questions';
import AddAnimalForm from './components/adoption/AddAnimalForm';
import PetList from './components/adoption/PetList';
import Logout from './components/clients/Logout';
import DetailsAdoption from './components/adoption/DetailsAdoption';
import Edit from './components/adoption/Edit';
import RouteGuard from './lib/routeGuard';
import { ServiceProvider } from './contexts/serviceContext';
import NotFound from './components/about/NotFound';


function App() {

  return (
    <AuthProvider>
      <ServiceProvider>
      <div className='root'>
        <Header />

        <main>
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Login} element={<LoginForm />} />
            <Route path={Path.Register} element={<RegisterForm />} />
            <Route path={Path.Logout} element={<Logout />} />

            <Route path={Path.ContactUs} element={<ContactUsForm />} />
            <Route path={Path.Hospital} element={<Hospital />} />
            <Route path={Path.Doctors} element={<Doctors />} />
            <Route path={Path.Team} element={<Team />} />

            <Route path={Path.Services} element={<Services />} />
            <Route path={Path.Questions} element={<Questions />} />

            <Route path={Path.Find} element={<PetList />} />
            <Route path={Path.Details} element={<DetailsAdoption />} />

            <Route element={<RouteGuard />} >
              <Route path={Path.Add} element={<AddAnimalForm />} /> 
              <Route path={Path.Edit} element={<Edit />} />
            </Route>
            <Route path='*' element={<NotFound />} />

          </Routes>
        </main>

        <Footer />
      </div>
      </ServiceProvider>
    </AuthProvider>
  )
}

export default App
