//https://www.freecodecamp.org/portuguese/news/como-pesquisar-e-filtrar-componentes-em-react/

//import { useState, useEffect } from "https://cdn.skypack.dev/react";
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //     define a consulta de pesquisa como uma string vazia
  const [q, setQ] = useState("");

  //     define os parâmetros de pesquisa
  //     queremos apenas buscar os países por capital e name
  //     essa lista pode ser mais longa, se você quiser
  //     você pode buscar os países até por sua população
  //     basta adicionar isso ao array
  const [searchParam] = useState(["capital", "name"]);

  // Observação: o array vazio [] significa que esse
  // useEffect será executado uma vez
  // de modo semelhante a componentDidMount()
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Observação: é importante tratar erros aqui
        // em vez de usar um bloco catch() para não termos
        // exceções a partir de bugs de fato nos componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  /**Essa função recebe os itens que buscamos no fetch e retorna todos os itens que correspondem a qualquer coisa em nosso array searchParam se o indexOF() for > -1. */
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]?.toString()?.toLowerCase()?.indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      /* aqui fazemos o map do elemento e exibimos cada item como um card  */
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              /*
              // define o valor de q de nosso useState // sempre que o usuário digitar na busca
              */
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only"> Search countries here</span>
          </label>
        </div>
        <ul className="card-grid">
          {search(items).map((item) => (
            <li key={item.name}>
              <article className="card">
                <div className="card-image">
                  <img src={item.flag} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      population:{" "}
                      <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
