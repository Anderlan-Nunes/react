import React from 'react';
import {Routes, Route} from 'react-router-dom';

import About from "./components/About"
import Home from "./components/Home"


const Rotas = () =>
<Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/about" element={<About />} />   
    <Route path="*" element={<Home />} />
</Routes>

export default Rotas;