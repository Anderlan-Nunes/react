import './Intervalo.css'
import Card from "./Card"
import { connect } from 'react-redux'

function Intervalo (props) {
    const {min, max} = props
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

export default connect(mapStateToProps)(Intervalo)