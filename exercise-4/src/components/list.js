import React, {useState} from "react";
function List(){
    const [items,setItems]= useState([]);
    const[inputvalue,setInputValue]=useState('');
    const handle=()=>{
        if(inputvalue.trim())
        {
            setItems([...items,inputvalue]);
            setInputValue('');
        }
    };
    const removeItem=(itemtoremove)=>{
        setItems(items.filter(item=>item!==itemtoremove));
    };
    return (
        <div>
        <h1>item list</h1>
        <input 
        type="text" 
        value={inputvalue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={handle}>Add Item</button>
      
   
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() =>removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      
      
      <p>Total items: {items.length}</p>
    </div>
  );
}

export default List;