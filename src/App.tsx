import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "./store/favorites-slice";
import { historyActions } from "./store/history-slice";
import { moviesActions } from "./store/movies-slice";
import { orderActions } from "./store/order-slice";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Ui from "./components/Ui/Ui";
import NetflixImage from './Images/netflixBackGroundNew.jpg'
import NetflixImageClear from './Images/netflixBackGround.jpg'


function App() {
  const dispatch = useDispatch();
  var sectionStyle = {
    backgroundImage: `url(${NetflixImage})`,
    //height:'100vh',
    minheight:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={sectionStyle}>
    
      <Navigation />
      <Footer />
     
    </div>
  );
}

export default App;
