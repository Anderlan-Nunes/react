import './Button.css'

export default props => {
   let classes = 'button ';
   classes += props.operation ? 'operation' : '';
   classes += props.double ? 'double' : '';
   classes += props.triple ? 'triple' : '';

   return(
    <button 
        onClick={e => props.click && props.click(props.label) /* props.click(e.target.innerHTML)} */} 
        className={classes}>
            {props.label}
    </button>
   )

}

/**
 *  return(
        <button className={`button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}`
        }>
            {props.label}
        </button>
    )
 */

/**onClick={e => props.click && props.click(e.target.innerHTML)} usou os 2 para nao dar erro pq faz essa verificaçao props.click antes de chamar a funcao click
 * 
 * espero receber no clique do botao uma propriedade chamada clique e esta propriedade o conteudo dela vai ser uma funcao q sera chamada so que esta funcao click em vez de receber o evento vai receber o conteudo do elemento html
 * 
 * props.click(e.target.innerHTML)} trocou por props.click(props.label)} o conteudo do botão eh a mesma coisa que props.label
 */