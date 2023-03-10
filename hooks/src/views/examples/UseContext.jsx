import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContenxt'

const UseContext = (props) => {

    const context = useContext(DataContext) // pode assim tambem const {state, setState} = useContext(DataContext) onde tiver "context" usa so o state ex setState({, state.text
    
    function addNumber(delta) {
        context.setState({
            ...context.state, // qndo for alterar um estado altere restauranto todos atributos do estado
            number: context.state.number + delta  // ele vai replicar todos os atributo do estado e só 
        })
    }
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto (DataContext = React.createContext(data)) e retorna o valor atual do contexto!"
            />
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