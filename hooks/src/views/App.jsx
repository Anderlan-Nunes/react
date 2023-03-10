import './App.css'
import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../data/DataContenxt'

const App = props => {

    const [state, setState] = useState(data) // inicializando o state com o objeto data

    return (
        // o parametro value tem que ser inicializado com os dados q vou passar para todos os componentes (atributo data) 
        //<DataContext.Provider value={data}>
        // estou delimitando um objeto javascript seria o mesmo que value={{state:state, setState:setState}}> basicamente eu estou criando um objeto que vai representar o meu estado. Agora o meu valor do meu contexto o meu contexto tem um objeto com 2 atributos: state e setState
        <DataContext.Provider value={{state, setState}}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>

        </DataContext.Provider>
    )
}

export default App