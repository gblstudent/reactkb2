import { useState } from "react";
import ChildCom03 from "./ChildCom03";

function Parent03() {
    const [input1, setInput1] = useState("");
    return ( 
        <>
            <input 
                onChange={ (e) => setInput1(e.target.value) } 
                value={input1} 
                data-testid="inp1"
            />
            Parent : <span data-testid="span1" >{input1}</span>
            <ChildCom03 pval={input1} />
        </> 
    );
}

export default Parent03;