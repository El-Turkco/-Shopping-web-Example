import React, { useState } from "react";
import './style.css';
import axios from "axios";
import toast from "react-hot-toast"
import { Link,} from "react-router-dom";
import Cookies from 'js-cookie';
import {useNavigate } from "react-router-dom";


function Login() {

    const [email,setemail] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();

    

    const handleSubmit = async(e) => {
        e.preventDefault()

    }

    const Payload= {
        email:email,
        password:Password,
     }

     const loginUser = async() => {
       
        try{
            const response = await axios.post("http://127.0.0.1:5000/api/v1/users/login",Payload)
            if(response.status == 200){
                Cookies.set("jsonwebtoken",response.data.token)
                Cookies.set("Basket-ID",response.data.BasketID)
                toast.success("Successful Login")
                return setTimeout(() => {
                  navigate("/home")
              },2000)
            }else{
                return toast.message("Someting went wrong")
            }

        }catch(err){
            return toast.error(err.data)
        }
        
    }

    const Showpassd = () => {
      document.getElementById("passd").type = Text;
      document.getElementById("Showpassd").hidden = true
      document.getElementById("unShowpassd").hidden = false

    }
    const unShowpassd = () => {
        document.getElementById("passd").type ="password";
        document.getElementById("Showpassd").hidden = false
        document.getElementById("unShowpassd").hidden = true
    }

    return(
        <div className="Maindiv">

            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <label id="title" htmlFor="">Login</label>
                    <div className="froms">
                        <label htmlFor="">Email</label>
                        <input placeholder="Email" type="email" value={email} onChange={(e)=> setemail(e.target.value)} />
                        <label htmlFor="">Password</label>
                        <div className="passdContanier">
                            <input id="passd" placeholder="password" type="password" value={Password}  onChange={(e)=> setPassword(e.target.value)} />
                            <button id="Showpassd"  onClick={Showpassd} onDoubleClick={unShowpassd}></button>
                            <button id="unShowpassd"  onClick={unShowpassd} type="button" hidden={true}></button>

                        </div>
                        
                        <button onClick={loginUser}>Signin</button>
                        
                    </div>
                    <div>
                        <Link id="link" to="/register">You dont have an account? Register Here</Link> 
                    </div>
            </form>
       
        </div>

    )
}

export default Login;