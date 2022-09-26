import React, { Component } from 'react'
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : ""
      }
      console.log("lifecycleA constrctor called")
    }

    static getDrivedStateFromProps(){
        console.log("LifecycleA getDrivedStateFromProps called")
        return null;
    }

    componentDidMount(){
        console.log("lifecycleA componentDidMount called")
    }
 

  render() {
    console.log("LifeCycleA render method called")
    return (
        <>
      <div>LifeCycleA</div>
      <LifeCycleB/>
        </>
    )
  }
}

export default LifeCycleA