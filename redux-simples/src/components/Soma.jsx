import Card from "./Card"

export default props => {
    // const {min, max} = props
    return (
        <Card title='Soma dos Números' purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    {/* <strong>{min + max}</strong> */}
                </span>
            </div>
        </Card>
    )
}