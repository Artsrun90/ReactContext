import React, { useState} from 'react';

const Testcomp1 = () =>{
    
    const [number,setNumber] = useState(10);

    function hendleSubmitPlus(){       
        setNumber(number + 1);
    }
    function hendleSubmitMinus(){       
        setNumber(number - 1);
    }

    return(
        <div>
            <h2>{number}</h2>
            <button onClick={hendleSubmitPlus}>Plus</button>
            <button onClick={hendleSubmitMinus}>Minus</button>
        </div>
    )
    }

    
    export default Testcomp1;