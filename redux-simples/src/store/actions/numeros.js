import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionType'
//Action Creator -> retorna um action que tem pelo menos um atributo
export function alterarNumeroMinimo(novoNumero){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}
/**
 * ja temos dos os componentes conectados com o stados da aplicacao iniciados com o redux
 * 
 * agora esta faltando agente chamar um action creator para que uma action seja criada e esta action seja passa para todas os nossos reduxs via dispach
 * 
 * dispach que aconteu e vai ser passada para todo os redux
 * 
 */