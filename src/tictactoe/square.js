import React from "react";

export default function Square(props){
    return(
        <div className="square"
        onClick={props.onClick}
        style={{
        border:"1px solid",
        height:"100px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        }}>
            <h5 className="text-4xl">{props.value}</h5>
        </div>
    );
}