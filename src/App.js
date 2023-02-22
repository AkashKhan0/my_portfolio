import React from 'react';
import Back from './images/bg.JPG';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Service from './Service';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Profile from './Pages/Profile';


export const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="full_container">
    <img src={Back} alt="background_image"/>
        <div className="container">

            <div className="profile">
              <Profile />
            </div>
            
            <div className="all_pages">
              <div className="header">
                <Header />
              </div>


              <div className="pages">
                <Routes>
                  <Route exact path='https://akashkhan0.github.io/my_portfolio/' element={<About />} />
                  <Route exact path='/service' element={<Service />} />
                  <Route exact path='/review' element={<Review />} />
                  <Route exact path='/contact' element={<Contact />} />
                </Routes>
              </div>

              <div className="footer">
                <Footer />
              </div>
            </div>

        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
