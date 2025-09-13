import { useState } from "react";

function Component1() {
    const [input1, setInput1] = useState("");

    return ( 
        <>
            <input 
                onChange={ (e) => setInput1(e.target.value) } 
                value={input1} 
                data-testid="inp1"
            />
            <span data-testid="span1" >{input1}</span>
        </> 
    );
}

export default Component1;