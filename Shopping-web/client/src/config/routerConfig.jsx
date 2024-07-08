import React from "react";
import {Routes,Route} from 'react-router-dom';

import Home from '../pages/homePage/Home';
import Login from '../pages/authPage/login'
import Auth from '../pages/authPage/register';
import Basket  from '../pages/basket/basket';
import Notfound from '../pages/Notfound/notfound'

import Details from '../pages/Details/details'




function RouterConfig(){
    return(
       
            <Routes>
                <Route path='/' element= {<Auth/>}/>
                <Route path='/register' element= {<Auth/>}/>
                <Route path='/home' element= {<Home/>}/>
                <Route path='/basket/:basketid' element= {<Basket/>}/>
                <Route path='/login' element= {<Login/>}/>
                <Route path='/products/details/:id' element= {<Details/>}/>
               
                <Route path='*' element={<Notfound />}/>
            </Routes>
    )
}

export default RouterConfig