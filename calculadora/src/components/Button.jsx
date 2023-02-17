import './Button.css'

export default props => {
   

    return(
        <button className={`button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}`
        }>
            {props.label}
        </button>
    )
}