import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch }  from '../../hooks/useFetch'
import { useCount } from '../../hooks/useCount'

const UseRef = (props) => {

    const [count, inc, dec] = useCount(15)


    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    //tranformando array de elemento em um array de jsx
    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title='Exercício #01' />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => {inc()}}
                    >Inc</button>
                    <button className="btn"
                        onClick={() => {dec()}}
                    >Dec</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false} 
                </ul>
            </div>
        </div>
    )
}

export default UseRef

//{response.data ? showStates(response.data) : false} assim tbm pode
