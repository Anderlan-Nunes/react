import { combineReducers, createStore } from "redux";


const reducers = combineReducers({
    numeros: function(state, action) {
        console.log(state, ' ', action) // pra enter qndo ele chamou essas funcoes
        return {
            min: 7,
            max: 200
        }
    },

    nomes: function(state, action){
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

