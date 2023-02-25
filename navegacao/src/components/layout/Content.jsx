import "./Content.css";

 import React from "react";
 import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/examples/Home";
 //import Param from "../../views/examples/Param";
 import About from "../../views/examples/About";
 //import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/about" element={<About />} />
            
            <Route path="/" exact element={<Home />} />
            
        </Routes>
    </main>
)

export default Content;

//<Route path="/param/:id" element={<Param />} />
//<Route path="*" element={<NotFound />} />