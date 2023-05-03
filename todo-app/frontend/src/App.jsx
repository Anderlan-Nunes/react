import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Menu from './components/view/Menu';
import Rotas from './Rotas';

function App() {
  return (

    <div className="container">
    <BrowserRouter>   
        <Menu />
        <Rotas />
    </BrowserRouter>
    </div>
    
      
 
  );
}

export default App;
