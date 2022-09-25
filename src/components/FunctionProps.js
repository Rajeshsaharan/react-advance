import React from "react";

const FunctionProps = props =>{
    console.log(props.children);
   return <>
       <h1> hello my name is {props.name}</h1>
       <button>logout</button>
       {props.children}
   </>
}

export default FunctionProps;