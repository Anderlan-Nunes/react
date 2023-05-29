import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "../actions/actionType"

const initialState = {
    min: 15,
    max: 35
}
export default function(state = initialState, action) { //export default function(state, action) { caso o estado inicial nao for passado
    console.log('Reducer Numeros....')
    console.log(state, ' ', action) // pra enter qndo ele chamou essas funcoes
    
    switch(action.type) {
        case NUM_MIN_ALTERADO :
            return {
                // o novo estado e todos os atributo do estado atual (...) e so altero o valor min
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO :
            return {
                ...state,
                max: action.payload
            }
        default:
            //return state // caso de tudo fora retorna por padrao o estado atual e nao o estado fixo const initialState
            return state
    }
}
 //     min: 7,
//     max: 200
// }