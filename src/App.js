import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HouseList from './components/HouseList';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:Id" element={<PropertyDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    <Footer />  
  
  </div>;
};

export default App;
