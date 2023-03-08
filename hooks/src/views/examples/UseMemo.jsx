import React, { useEffect, useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(v1, v2){
    const future = Date.now() + 3000
    while(Date.now() < future) {} //espera 4 segundos
    return v1 + v2
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    //const [resul, setResult] = useState(0)

    // useEffect(()=>{
    //     setResult(sum(n1, n2))
    // },[n1, n2])

    const resultado = useMemo(() => sum(n1, n2), [n1, n2])
    
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />
            <div className='center'>
                <input 
                    type="number" className="input"
                    value = {n1}
                    onChange = {e => setN1(e.target.value)} 
                />
                <input 
                    type="number" className="input" 
                    value={n2}
                    onChange={e => setN2(e.target.value)}
                />
                <input 
                    type="number" className="input" 
                    value={n3}
                    onChange={e => setN3(e.target.value)}
                />
                <span>valor 1: {n1}</span>
                <span>valor 2: {n2}</span>
                <span>valor 3: {n3}</span>
            </div>
        </div>
    )
}

export default UseMemo

/**
 * Eu posso resolver todas as necessidades de um useMemo com a dupla useState e useEffect?


Eu imagino minha função (o componente), sendo executada (renderizada) toda vez que um estado é alterado. Ou seja, cada linha da minha função será executada novamente, para cada estado alterado. Isto é, se eu digitar uma string de 5 letras no input com o onChange, chamando um setState(e.target.value), meu componente será renderizado 5 vezes (para cada letra).

Para evitar essa renderização, o React disponibilizou alguns Hooks como o useMemo e useEffect, para impedir ou informar que somente alguns trechos do meu componente deverão ser reconstruídos (mediante a um array de dependências).


É bem isso, o useMemo serve para indicarmos que um trecho do código não precise ser renderizado novamente com a mudança de estado (apenas com a mudança de props)

Qualquer dúvida estou a disposição ;)



- Equipe Cod3r ;)
 */