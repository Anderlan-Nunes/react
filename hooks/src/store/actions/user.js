// todas as açoes direcionadas ao usuario

export function login(dispatch, name){
    dispatch({ type: 'login', payload: name })
}