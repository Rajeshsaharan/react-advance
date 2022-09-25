import React , { Component } from "react"


class ClassProps extends Component{
    render(){
        return <>
          <h1> my name is {this.props.name}</h1>
          <button>logout</button>
          {this.props.children}
        </>
    }
}

export default ClassProps;
