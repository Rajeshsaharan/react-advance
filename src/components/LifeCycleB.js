import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : ""
      }
      console.log("lifecycleB constrctor called")
    }

    static getDrivedStateFromProps(){
        console.log("LifecycleB getDrivedStateFromProps called")
        return null;
    }

    componentDidMount(){
        console.log("lifecycleA componentDidMount called")
    }

    shouldComponentUpdate(){
        console.log("lifeCycleB shouldComponentUpdate Called")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleB getSnapShotBeforeUpdate called")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate called")
    }
 

  render() {
    console.log("LifeCycleB render method called")
    return (
        <>
      <div>LifeCycleB</div>
        </>
    )
  }
}

export default LifeCycleB