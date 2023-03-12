import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContenxt'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const context = useContext(DataContext) // pode assim tambem const {state, setState} = useContext(DataContext) onde tiver "context" usa so o state ex setState({, state.text
    
    function addNumber(delta) {
        context.setState({
            ...context.state, // qndo for alterar um estado altere restauranto todos atributos do estado
            number: context.state.number + delta  // ele vai replicar todos os atributo do estado e só 
        })
    }

    const {number, text, setNumber, setText} = useContext(AppContext) // importando do Store.jsx

    useEffect(function(){
        if(number > 1250) {
            setText('passou de 1250!!!!')
        }
    },[number])
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto (DataContext = React.createContext(data)) e retorna o valor atual do contexto!"
            />

            <SectionTitle title = "Exercício #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => addNumber(+1)}
                    >+1</button>
                                        <button className="btn"
                        onClick={() => addNumber(-1)}
                    >-1</button>
                </div>
            </div>

            <SectionTitle title = "Exercício #02 com Encapsulamento Store" />
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={()=> setNumber(number -1)}>
                        -1
                    </button>
                    <button 
                        className="btn"
                        onClick={()=> setNumber(number +1)}>
                        +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext

/**
    {context.text}
    {context.number}
 * value={{state:state, setState:setState}}> Agora o meu valor do meu contexto o meu contexto tem um objeto com 2 atributos: state e setState
 entao como eu tenho o setState eu posso usar ele  para alterar
*/