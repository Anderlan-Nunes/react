// import { useState } from 'react';
import './App.css';
import React from 'react';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  // const [min, setMin] = useState(10)
  // const [max, setMax] = useState(100)
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        {/* <Intervalo
          min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}
        /> */}
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        {/* <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> */}
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
