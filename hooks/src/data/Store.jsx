import React, { useState } from 'react';

//este eh o objeto que estou compartilhando a partir deste provider q criei encapsulado do componente Store

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

// exportar pq eh a partir dele q eu consigo acessar o context
export const AppContext = React.createContext(initialState)

const Store = props => {
    
    const [state, setState] = useState(initialState)

    function updateState(key, newValue){
        setState({ // lembrando q setState nesse caso eh um objeto entao tenho q passar um objeto
            ...state, //clona o estado atual mas mudar a chave e valor
            [key]: newValue
        })
    }
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number',n),
            setText: t => updateState('text', t)
        }}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}

export default Store

/**
 * nao passa o value ={{state, setState}} setState para os filhos pq estou controlando o estado do componente entao passa as funçoes prontas
 * nao estou passando a funcao q altera o estado inteiro que seria o setState
 */
/**
 * encapsulando o objeto - Criando componente para encapsular este objeto que estou compartilhando encapsulado a partir do provider sem disponibilizar a função setState trabalhando com o Context API React.createContext
 */