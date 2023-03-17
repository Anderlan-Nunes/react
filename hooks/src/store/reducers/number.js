export function numberReducer(state, action ) {
    switch (action.type) { // toda action tem pelo mes o atributo type q é o q vai dizer q vai ser feito nessa açao
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberInt':
            return { ...state, number: parseInt(state.number)}
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        default: 
            return state // caso nao seja um acão mapeada(action.type) ele retornar estado atual
    }
}