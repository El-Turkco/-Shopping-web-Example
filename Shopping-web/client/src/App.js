import './App.css';
import React from 'react';
import RouterConfig from './config/routerConfig'
import toast  from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div >
        <RouterConfig />
        
        <Toaster position='"top-right'/>
    </div>
  );
}

export default App;
