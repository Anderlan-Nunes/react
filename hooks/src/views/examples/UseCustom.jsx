import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch }  from '../../hooks/useFetch'

const UseRef = (props) => {

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
