import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/banner';
import IconGrid from './components/IconGrid';
import Wrapper from './components/Wrapper';
import Service from './components/Service';
import Consultancy from './components/Consultancy';
import CardContainer from './components/CardContainer';
import Provide from './components/Provide';
import Cont from './components/cont';
import PhotoContainer from './components/PhotoContainer';
import We from './components/We';
import abc from './components/images/J4PHJPI.jpg';
import Footer from './components/footer';
import logo from './components/images/logo.png';





const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Wrapper />
      <Wrapper />
      <Wrapper />
      <IconGrid />
      <Service />
      <Consultancy />
     <CardContainer />
      <Provide />
      <Cont />
      <PhotoContainer />
      <We />
      <div className="photo">
        <img src={abc} alt=" " />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <Footer />

    </div>
  );
};

export default App;
