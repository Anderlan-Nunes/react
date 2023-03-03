import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const count2 = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    
    useEffect(function () {
        count2.current = count2.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count2.current++
        myInput1.current.focus()
    }, [value2])

    count.current = count.current + 1


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <div>
                    <span className="text">Valor2: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count2.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text" className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    type="text" className="input"
                    ref = {myInput2}
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                />
            </div>

        </div>
    )
}

export default UseRef

/*
useRef()
se eu sair e voltar ele zera pq eu vou receber um novo objeto mas enquanto eu estiver renderizando o mesmo objeto ele vai sempre retornar a mesma referência (por isso q posso colocar no corpo do componente) ou seja eu tenho um objeto ele me dá uma referencia e eu consigo mecher no atributo “current” 

useRef() x useState 
a diferença é que o useState sempre que modificar o estado o useState automaticamente o componente é renderizado automaticamente

*/

