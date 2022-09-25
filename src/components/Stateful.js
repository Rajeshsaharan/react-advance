import React from "react";
import { Component } from "react";


class Stateful extends Component{
    constructor(){ // constructor is important for adding property
        super() // for base class inheritance
        this.state = {
            "name" : "guest"
        }
    }
    changeName(name){
        this.setState({
            "name" : name
        })
    }
    render(){
        return (
            <>
            <h1> hello my name is {this.state.name}</h1>
            <button onClick={()=>this.changeName("rajesh")}>set name to rajesh</button>
            </>
        )
    }
}


export default Stateful;