import { useState } from "react";

function ChildCom03(props) {

    return ( 
        <>
            Child : <span data-testid="chspan1" >{props.pval}</span>
        </> 
    );
}

export default ChildCom03;