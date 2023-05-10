import Card from "./Card"

export default props => {
    const {min, max} = props
    return (
        <Card title='Média dos Números' blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max / min}</strong>
                </span>
            </div>
        </Card>
    )
}