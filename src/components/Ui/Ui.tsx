import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../../store/favorites-slice";
import { historyActions } from "../../store/history-slice";
import { moviesActions } from "../../store/movies-slice";
import { orderActions } from "../../store/order-slice";

const Ui = () => {
const dispatch = useDispatch();


const toggle = useSelector((state:any) => state.main.test);
    return (
      <div>

    
      </div>
    );
  };
  
  export default Ui;
  