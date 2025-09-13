import { useState } from "react";

function Component2() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const handleAddItem = () => {
        if(input.length > 0){
        setItems(items => [ ...items, input]);
        setInput("");
        }        
    };

    return ( 
        <>
            <div className="App">
                <h3>Item List</h3>
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter item"
                data-testid="inp1"
                />
                <button onClick={handleAddItem} data-testid="addBtn1">
                Add Item
                </button>
                <ul data-testid="itemList1">
                {items.map((item, index) => (
                    <li key={index} data-testid={`list-item-${index}`}>
                    {item}
                    </li>
                ))}
                </ul>
            </div>
        </>
     );
}

export default Component2;