import React, { useState } from "react";

export default function Hook1(){
    const[count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <>
        <p>count value</p>
        <MyButton count={count} onClick={handleClick} />  
        <MyButton count={count} onClick={handleClick} />        
        </>
    );
}
function MyButton({count,onClick}){
    return(
        <>
        <p>count value</p>
        <button onClick={onClick}>counter{count} times</button>
        </>
        
    );
}


