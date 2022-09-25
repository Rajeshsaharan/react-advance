import React, { Component } from 'react'

class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment(){
        // never change state directly it will never update ui Directly
        //example 
        // this.state.count + 1; // wrong 

        //use always setState method to rerender the ui

        this.setState({
            count : this.state.count + 1
        },
        ()=>{
            console.log("this is callback function it only called when setState method called")
        }
        ) // setState also a async method so we can use it any things we want to do after state update
        console.log(this.state.count);
    }
  render() {
    return (
      <div>
        <h1> count is {this.state.count}</h1>
        <button onClick={()=>this.increment()}> increment</button>
      </div>
    )
  }
}

export default SetState