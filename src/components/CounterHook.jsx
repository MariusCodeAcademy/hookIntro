import React, { useState, useEffect } from 'react'

function CounterHook() {
    
    const [counter, setCounter ] = useState(0);
    const [name, setName] = useState('');
    
    // componentDidMount
    // componentDidUpdate
    // useEffect() vietoj divieju auksciau isvardintu 
    useEffect(() => {
        console.log('useEffect');
        document.title = `${name} has clicked ${counter} times`
        // componentWillUnmount - componento paslinimas. pvz uzdaryt db prisijungima
        return () => {
            // veikia kaip componentWillUnmount kai antras useEffect argumentas yra []
            console.log('clean up')
        }
    }, [])
    
    return ( 
    <div>
        <h2>Counter of {name}</h2>
        <h2>{name} has clicked {counter} times</h2>
        <button onClick={() => setCounter(counter + 1)} >Increase</button>
        <button onClick={() => setName('James')} >Set name to James</button>
        <input type='text' placeholder='enter Name' value={name} onChange={(event) => setName(event.target.value)} />
    </div> 
    );
}
 
export default CounterHook;




// sukurti counteri su mygtuku kad paspaudus didinam skaiciu vienetu.

// sukurti couterio vaizda

// padaryti kad veiktu

// prideti skaiciaus mazinimo mygtuka