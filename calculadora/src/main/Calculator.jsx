import './Calculator.css'

import { Component } from 'react'

import Button from '../components/Button'
import Display from '../components/Display'

//aki e apenas uma constante fora do objeto
// criei a constante fora do objeto para q a funcao clearMemory restaure para o estagio inicial
const initialState = {
    displayValues : '0',
    clearDisplay: false, 
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    // aki eu posso colocar para ele start o stado
    state= { ...initialState } // aki o clone do objeto e atribui a state

    constructor(props) { /*pode usar assim no lugar das arrow function por causa do this */
        super(props)

        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        this.setState({ ...initialState })
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true} )
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValues: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n){
        if (n === '.' && this.state.displayValues.includes('.')){ 
            return
        }

        const clearDisplay = this.state.displayValues ==='0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValues
        const displayValues = currentValue + n
        this.setState({ displayValues, clearDisplay: false })
        /*const newdisplayValues = currentValue + n
        this.setState({ newdisplayValues: displayValues, clearDisplay: false }) pode assim tambem*/
        
        if (n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValues)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState( {values })
            console.log(values)
        }
    }
    render() {
        return (
            <div className='calculator'>
                <Display displayValue={this.state.displayValues}/>
                <Button label='AC'triple click={() => this.clearMemory()/*usa arrow function por causa do this */}/> 
                <Button label='/' operation click={this.setOperation}/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='X' operation click={op => this.setOperation(op)}/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={n => this.addDigit(n)}/>
                <Button label='-' operation click={this.setOperation}/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' operation click={this.setOperation}/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.addDigit}/>
                <Button label='=' operation click={this.setOperation}/>

            </div>
        )
    }
}