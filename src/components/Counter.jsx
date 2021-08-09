import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0
         }
    }
    render() { 
        return ( <div>
            <h1>Counter</h1>
            <h2>{this.state.counter}</h2>
            <button>Increase</button>
        </div> );
    }
}
 
export default Counter;




// sukurti counteri su mygtuku kad paspaudus didinam skaiciu vienetu.

// sukurti couterio vaizda

// padaryti kad veiktu

// prideti skaiciaus mazinimo mygtuka