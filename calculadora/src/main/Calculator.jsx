import './Calculator.css'

import { Component } from 'react'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props) { /*pode usar assim no lugar das arrow function por causa do this */
        super(props)

        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }
    render() {
        return (
            <div className='calculator'>
                <Display displayValue={10000}/>
                <Button label='AC'triple click={() => this.clearMemory()/*usa arrow function por causa do this */}/> 
                <Button label='/' operation click={this.setOperation}/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='X' operation click={op => this.setOperation(op)}/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={n => this.setOperation(n)}/>
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