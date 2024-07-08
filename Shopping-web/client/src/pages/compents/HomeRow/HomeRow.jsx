import React from "react";
import './style.css'
import PropTypes from 'prop-types'
import  ProductLists  from "../Products/ProductLists";


function HomeRow({_id,Name,Price,Url}){
    
    return(
    
    <div className="Maindiv"> 
       
        <div className="Columns">
            <ProductLists/>
            <div className="container1">
                <img id="profil-icon" src={Url} alt="" />
                <p>{Price}</p>
            </div>
            <div className="Rows">
                <img id="profil-icon" src={Url} alt="" />
                <p>{Price}</p>
            </div>
        </div>
    </div>
    )
}


export default HomeRow;