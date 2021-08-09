import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0
         }
    }

    setCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() { 
        return ( <div>
            <h2>Counter</h2>
            <h2>{this.state.counter}</h2>
            <button onClick={this.setCounter} >Increase</button>
        </div> );
    }
}
 
export default Counter;




// sukurti counteri su mygtuku kad paspaudus didinam skaiciu vienetu.

// sukurti couterio vaizda

// padaryti kad veiktu

// prideti skaiciaus mazinimo mygtuka