import React, { useEffect,useState } from "react";
import Navbar from '../compents/navbar/navbar'
import HomeRow from '../compents/HomeRow/HomeRow'
import HomeColumn from '../compents/HomeColumn/homecolumn'
import './style.css'
import toast from "react-hot-toast"
import axios from "axios";
import ProductLists from "../compents/Products/ProductLists";





function Home(){

   
    return(

        <div>
            <header>
                <Navbar/>
            </header>
                <div  className="Rowdiv">
                    <ProductLists/>
                </div>       
        </div>
    )
}


export default Home;