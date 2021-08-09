import React, { useState } from 'react'

function CounterHook() {
    
    const arr = useState(0);
    console.log(arr);
    const counter = arr[0];
    const setCounter = arr[1]

    const onCounter = () =>  {
        setCounter(counter + 1)
    }

    return ( 
    <div>
        <h2>Counter</h2>
        <h2>{counter}</h2>
        <button onClick={onCounter} >Increase</button>
    </div> 
    );
}
 
export default CounterHook;




// sukurti counteri su mygtuku kad paspaudus didinam skaiciu vienetu.

// sukurti couterio vaizda

// padaryti kad veiktu

// prideti skaiciaus mazinimo mygtuka