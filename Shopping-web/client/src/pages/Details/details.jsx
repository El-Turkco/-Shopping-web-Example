import React, { useEffect, useState } from "react";
import './style.css';
import Navbar from '../compents/navbar/navbar'
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"




function Details(){
    const {id} = useParams();
    const [productID,setproductID] = useState("")
    const [Name , setName] = useState("");
    const [Price , setPrice] = useState("");
    const [Url ,setUrl] = useState("");


    useEffect(() => {
        getProductByID();
    },[])

    const getProductByID =async () => {
        
        const response = await axios.get("http://127.0.0.1:4000/api/v1/products/"+ id);
        setName(response.data.Name)
        setPrice(response.data.Price)
        setUrl(response.data.Url)
        setproductID(response.data._id)
        return response.data
    }
    
    const AddBasket = async () => {
        const cokkie = document.cookie.split(";")
        const jwtToken =[]
        const Basketid =[] 
        const resultToken = cokkie.map((token) => {
            if (token.startsWith("js")){
                jwtToken.push(token)
            }
        const resultbasketid = cokkie.map((id) =>{
                Basketid.push(id)
             
        } )
           
        })
        const Token = jwtToken[0].split("=")[1]
        const ID= Basketid[1].split("=")[1]
        const response = await axios.post("http://127.0.0.1:3002/api/v1/basket/"+ID+"/"+"add/products/"+{productID}.productID+"/"+Token)
        return toast.success("Product successfully added")
    }
  
    return(
        <>
        <header>
                <Navbar/>
        </header>
            <div className="productContainers">
                <div>
                    <div className="">
                        <img src={Url} alt="" />
                    </div>
                    <button onClick={AddBasket} >Sepete ekle</button>
                </div>
                <div className="name">
                    <h3>{Name}</h3>
                    <h3>{Price}</h3>
                </div>
            </div>
        </>
    )
}


export default Details;