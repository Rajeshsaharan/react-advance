import React, { Component } from 'react'
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : ""
      }
      this.changeState = this.changeState.bind(this)
      console.log("lifecycleA constrctor called")
    }

    static getDrivedStateFromProps(){
        console.log("LifecycleA getDrivedStateFromProps called")
        return null;
    }

    componentDidMount(){
        console.log("lifecycleA componentDidMount called")
    }

    shouldComponentUpdate(){
        console.log("lifeCycleA shouldComponentUpdate Called")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA getSnapShotBeforeUpdate called")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate called")
    }
    changeState(){
        this.setState({message : "component is updated"})
    }
 

  render() {
    console.log("LifeCycleA render method called")
    return (
        <>
      <div>LifeCycleA</div>
      {/* chnaging state */}
      <button onClick={this.changeState}>change state</button>
      <LifeCycleB/>
        </>
    )
  }
}

export default LifeCycleA