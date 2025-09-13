import { useState } from "react";

import ChildCom04 from "./ChildCom04";

function Parent04() {
    const [parentValue1, setParentValue1] = useState();
    return (<>
        I am parent Content having parentValue1 : <span data-testid="parentspan1" >{parentValue1}</span>
        <ChildCom04 setObj1={setParentValue1} />
    </>);
}

export default Parent04;