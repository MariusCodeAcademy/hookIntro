import React, { useState } from 'react'
import useDocumentTitle from '../hook/useDocumetTittle';

function CounterHook() {
    
    const [counter, setCounter ] = useState(0);
    const [name, setName] = useState('');
    
    // componentDidMount
    // componentDidUpdate
    // useEffect() vietoj divieju auksciau isvardintu 
    
    // custom user hook
    useDocumentTitle(`${name} has clicked ${counter} times`)
    
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