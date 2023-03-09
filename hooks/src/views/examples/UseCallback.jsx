import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    /*function inc(delta){
       return setCount(count + delta)
    }
    
todas vez que o component e renderizado a funcao inc e criada novamente nao posso colocar essa funcao fora do componente pq ela dependo do stado do component o setCount por isso usa o hook useCallback()
e nao pode chamar o count entao no lugar chama uma funcao callback setCount (curr => curr + delta) em vez de depender do count eu vou dependo do setCount. ele sera criada uma unica vez
    */

    const inc = useCallback(function(delta) {
        setCount(curr => curr + delta)
    },[setCount]) // setCout nao mudar retorna sempre a funcao q esta cacheada mas por causa do React.memo
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <span className="text red">(React.memo)</span>
            <div className='center'>
                <span className='text'>{count}</span>
                <UseCallbackButtons inc = {inc}/>
            </div>
        </div>
    )
}

export default UseCallback

/**
 * 
 * 
 * Eu posso sempre utilizar o React.memo?

Ou só em alguns casos?

Depende, se o que você for utilizar se encaixar nos requisitos do Memo pode sim, pois ele só funciona em componentes funcionais e que não possuem nenhum estado, já ele só vai fazer a renderização do componente se os props mudarem. Deu para entender?

Qualquer dúvida estou a disposição ;)

Aaaah, saquei!

Bom saber esse detalhe do estado dele, no caso se ele tiver algum estado interno que altera, não utilizo o React.memo.

Mas se ele for só um componente que recebe informações do pai, via props, e essas props nem sempre vão mudar, aí eu posso utilizá-lo.

Valeu!
 */