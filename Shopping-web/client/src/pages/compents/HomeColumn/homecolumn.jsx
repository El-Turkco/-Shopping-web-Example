import React from "react";
import './stylee.css'


function HomeColumn(){
    return(
        <>
        <div className="ColumnDiv"> 
                <div id="container2"><p id="basket"><a href="/basket">Basket</a></p></div>
                <div id="container3"><p id="Products">Products</p></div>
                <div id="container4"><p id="settings"> Settings</p></div>
                
        </div>
        </>

    )
}


export default HomeColumn;