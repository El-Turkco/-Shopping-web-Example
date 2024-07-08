import React, { useEffect,useState } from "react";
import './style.css'
import Navbar from '../compents/navbar/navbar'
import { useParams } from "react-router-dom";
import axios from "axios";

import {Parser} from "./helpers.func"

function Basket(){
    const {basketid} = useParams("")
    const [Name , setName] = useState("");
    const [Price , setPrice] = useState("");
    const [Url ,setUrl] = useState("");
    const [length ,setLength] = useState(0);

    const [Byitem,setByitem] = useState("")
    const totalitems = {Byitem}.Byitem.length
    const products =  []
   

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async () => {
       try{
        const cokkie = document.cookie.split(";")
        const jwtToken =[]
        const resultToken = cokkie.map((token) => {
            if (token.startsWith("js")){
                jwtToken.push(token)
            }

        })
        const Token = jwtToken[0].split("=")[1]
        const response = await axios.get(" http://127.0.0.1:3002/api/v1/basket/"+{basketid}.basketid+"/"+Token)
        if(typeof response.data.length == 'undefined' ){
            return setByitem(response.data.message)
        }
        setLength(response.data.length-1)
        console.log({length}.length)
        return products.push(response.data)
        
        
    //     for(let i = 0; i <= response.data.length-1; i++){
    //      products.map(item => (
    //          setName(item[i].Name),
    //          renderedItems.push(item[i].Price),
    //          setUrl(item[i].Url)
    //      ))
         
    //  }
      
       }catch(err){
            return console.log(err)
       }
     

    }

    return(
        <>
        <div>
            <Navbar/>
        </div>

          
        <div>
           <div className="Row">
                        
                (
                    for(let i = 0; i <= {length}.length; i++){
                        products.map(item => (
                            <div className='imgColumn' key={item}>
                                <img src={item.Url} alt="" />
                                <div className="namePrice">
                                    <h3>{item.Name}</h3>
                                    <div className="container"></div>
                                    <h3>{item.Price}</h3>
                                </div>
                        </div>
                            
                    ))
                        
                }
            )
                
            </div>
        </div>
        </>

    )
}

export default Basket;