import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

// criando um estado inicial
const initialState  = {
    cart: [],
    products: null,
    user: null,
    number: 0
}

function reducer(state, action ) {
    switch (action.type) { // toda action tem pelo mes o atributo type q é o q vai dizer q vai ser feito nessa açao
        case 'number_add2': return { ...state, number: state.number + 2 }
        case 'login' :
            return { ...state, user: { name: 'Patricia' } }
        case 'product' :
            return { ...state, products: action.payload }
        default: return state // caso nao seja um acão mapeada(action.type) ele retornar estado atual
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Sem Usuário</span>
                )}
                <span className="text">{state.number}</span>
                {state.products ? (
                    <span className="text">{state.products}</span>
                ) : (
                    <span className="text">Sem Produtos</span>
                )}
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login' })}
                    >Login</button>

                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_add2' })}
                    >+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'product', payload: 'Tsunade' })}
                    >product</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
