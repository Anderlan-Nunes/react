// criando um estado inicial

import { reducer } from "./reducers"

const initialState  = {
    cart: [],
    apelido: null,
    user: null,
    number: 0
}

export {
    initialState,
    reducer
}