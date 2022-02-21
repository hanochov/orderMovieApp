import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favorites-slice";
import { historyActions } from "../../store/history-slice";
import { moviesActions } from "../../store/movies-slice";
import { orderActions } from "../../store/order-slice";

import Movies from "../Movies/Movies";
import Order from "../Order/Order";
import FavoritesAndHistory from "../FavoritesAndHistory/FavoritesAndHistory";

const Main = () => {
    const dispatch = useDispatch();
    return (
      <div>
      <Movies/>
      <Order/>
      <FavoritesAndHistory/>
      </div>
    );
  };
  
  export default Main;
  