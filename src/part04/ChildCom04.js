import { useState , useEffect } from "react";

function ChildCom04({ setObj1 }) {

    const [input1, setInput1] = useState("");

    useEffect(() => {
        setObj1(input1);
    });

    return (<>

        <input
            onChange={(e) => setInput1(e.target.value)}
            value={input1}
            data-testid="inp1"
        />
        Child : <span data-testid="span1" >{input1}</span>

    </>
    );
}

export default ChildCom04;