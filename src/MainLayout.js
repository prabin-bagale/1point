// import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import MidBar from './components/MidBar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbarlog from './components/Navbar/NavbarLog'
import Navbar from './components/Navbar/Navbar'
import { useAuth } from "./AuthContext";

// import { useState } from 'react';
// // import NavigationBar from './components/NavigationBar';

const MainLayout = (props) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if(props?.location?.state==="Sucess"){
      window.alert('Welcome to 1point Med')
    }
  },[]);
  
  return (
    <div className="MainLayout">
      {/* <Navbar /> */}
      {/* <NavigationBar /> */}
      
      {(currentUser === null)?<Navbarlog/>  : <Navbar/>}
      <Intro />
      <main id="main">
        <About />
        <Services />
        <MidBar />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
