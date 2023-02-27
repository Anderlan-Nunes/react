
import { useParams } from 'react-router-dom';

const Param = props => {

    const { id } = useParams() /** esse id tem q ser o mesmo da rota */

    return (

        <div className='Param'>
            <h1>Params</h1>
            <p>Valor do param: <strong>{ id }</strong>!</p>
        </div>
    )
}

export default Param