import React, { useState}  from "react";
import './style.css';
import axios from "axios";
import toast from "react-hot-toast"

import { Link,Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



function Auth() {

    const [email,setemail] = useState("");
    const [Name,setName] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();


     const handleSubmit = async(e) => {
        e.preventDefault()

    }

    const Payload= {
        email:email,
        name:Name,
        password:Password,
     }


    const createuser = async() => { 
        try{
            const response = await axios.post("http://127.0.0.1:5000/api/v1/users/create",Payload)
            console.log(response.data)
            toast.success(response.data.message)
           return setTimeout(() => {
                navigate("/login")
              },2000)
        }
        catch(err){
            return toast.error(err.message.data)
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
                <label id="title" htmlFor="">REGİSTER</label>
                    <div className="froms">
                        <label htmlFor="">Email</label>
                        <input placeholder="Email" type="email" value={email} required={true} onChange={(e)=> setemail(e.target.value)} />
                        <label htmlFor="">Name</label>
                        <input placeholder="Name" type="text"  required={true} value={Name}  onChange={(e)=> setName(e.target.value)} />
                        <label htmlFor="">Password</label>
                        <div className="passdContanier">
                            <input id="passd"  required={true} placeholder="password" type="password" value={Password}  onChange={(e)=> setPassword(e.target.value)} /> 
                            <button id="Showpassd"  onClick={Showpassd} onDoubleClick={unShowpassd}></button>
                            <button id="unShowpassd"  onClick={unShowpassd} type="button" hidden={true}></button>

                        </div>
                        
                        <button onClick={createuser}>Signin</button>
                    </div>
                    <div>
                        <Link id="link" to="/login">Already have an account? Login Here</Link> 
                    </div>
                    
            </form>
           
            </div>
    

    );
}

export default Auth;