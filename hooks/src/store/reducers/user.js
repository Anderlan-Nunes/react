export function userReducer(state, action ) {

    switch (action.type) { // toda action tem pelo mes o atributo type q é o q vai dizer q vai ser feito nessa açao

        case 'login':
            return { ...state, user: { name: action.payload  } }
        case 'apelidos':
            return { ...state, apelido: action.payload }
        default: 
            return state // caso nao seja um acão mapeada(action.type) ele retornar estado atual
    }
}