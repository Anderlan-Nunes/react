import { combineReducers, createStore } from "redux";

import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
    numeros: numerosReducer,

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

