import { combineReducers, createStore } from "redux";


const reducers = combineReducers({
    numeros: function(state, action) {
        console.log('Reducer Numeros....')
        console.log(state, ' ', action) // pra enter qndo ele chamou essas funcoes
        
        switch(action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    // o novo estado e todos os atributo do estado atual (...) e so altero o valor min
                    ...state,
                    min: action.payload
                }
            default:
                //return state // caso de tudo fora retorna por padrao o estado atual
                return {
                    min: 7,
                    max: 200
                }
        }
    },

    nomes: function(state, action){
        console.log('Reducer de Nomes...')
        console.log("2", state," ", action)
        return [
            'ana',
            'bia',
            'carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig

