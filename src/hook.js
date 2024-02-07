import React, { useState } from "react";

export default function Hook(){
    return(
        <div>
        <p>counter increasing</p>
        <MyButton />
        <MyButton />
        </div>
    );
}

function MyButton(){
    const[count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <>
        <p>count value</p>
        <button onClick={handleClick}>counter {count}</button>
        </>
    );
}
