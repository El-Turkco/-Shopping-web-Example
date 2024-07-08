
import React, {useEffect, useState} from "react";
import './style.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

import Badge from '@mui/material/Badge';






function Navbar(){
    const  [Basketid ,setBasketid] = useState("")
    const navigate = useNavigate();    

useEffect(()=> {
    getBasketID()
},[])

    const getBasketID = async() => {
        const cokkie = document.cookie.split(";")
        const jwtToken =[]
        const resultToken = cokkie.map((token) => {
            if (token.startsWith("js")){
                jwtToken.push(token)
            }
           
        })
        const Token = jwtToken[0].split("=")[1]
        const res = await axios.get("http://127.0.0.1:3003/api/v1/waf/UserBasketID/" + Token)
        return setBasketid(res.data)
    }


    return(
        <div>
            <div className="header">
                <div className="title-nav-bar-item">
                      <a id="title" href="/home">ModaLine</a> 
                </div>
                <div className="Right-side-all-item">

                    <div className="Account-nav-bar-item">   
                               <button className="Account-nav-bar-div" onClick={() => {navigate("/register")}}>
                                        <img id="basket-icon" src="account-icon.png" alt="" />
                                        <p>Giriş Yap</p>
                               </button>   
                    </div>
                    

                    <div className="Basket-nav-bar-item">
                        <button className="Basket-nav-bar-div" onClick={() => { navigate("/basket/"+{Basketid}.Basketid)}} >
                            <Badge badgeContent={0} color="primary">
                                    <p>Sepet</p>
                            </Badge>
                           
                        </button>  
                    </div>
                    
                    
                </div>
                   
            </div>
        </div>
    )
}
export default Navbar;