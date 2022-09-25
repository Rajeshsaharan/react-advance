import React, { Component } from 'react'
 class PrevSetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }

    incrementbyFive(){
        // ! important
        //here is setState taking two callback (callback1 , callback2)
        //callback1 is returning an object with state-effect
        //callback2 is called after when ui is updated

        this.setState((prevState)=> {
           return {
            count : prevState.count + 5
        }
    })
        console.log("function called", this.state.count)
    }

  render() {
    return (
        <>
        <div>count is : {this.state.count}</div>
        <button onClick={()=>this.incrementbyFive()}>increment by +5</button>
        </>
      
    )
  }
}

export default PrevSetState