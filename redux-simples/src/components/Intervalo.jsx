import './Intervalo.css'
import { connect } from 'react-redux'

import Card from "./Card"
import { alterarNumeroMinimo } from '../store/actions/numeros'

function Intervalo (props) {
    const {min, max} = props
    props.alterarMinimo(10100)
    return (
            <Card title='Intervalo de Números' red>
                <div className="Intervalo">
                    <span>
                        <strong>Mínino:</strong>
                        {/* <input type="number" value={min}
                            onChange= {e=> props.onMinChanged(+e.target.value)}/> */}
                        <input type="number" value={min} readOnly/>
                    </span>
                    <span>
                        <strong>Máximo:</strong>
                        {/* <input type="number" value={max} 
                            onChange={e=> props.onMaxChanged(+e.target.value)}
                        /> */}
                        /* <input type="number" value={max} readOnly />
                    </span>
                </div>
            </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
 
    }
}

function mapActionCreatorsToProp(dispatch){
    return {
        alterarMinimo(novoNumero) {
            //action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}
export default connect(
    mapStateToProps,
    mapActionCreatorsToProp
)(Intervalo)