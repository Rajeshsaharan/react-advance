import React, { Component } from 'react'
import ChildRef from './ChildRef'

class ForwardRef extends Component {
    constructor(props) {
      super(props)
        this.compRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
        
    }
    clickHandler(){
        this.compRef.current.focus()
    }

  render() {
    return (
      <div>
        <ChildRef ref= {this.compRef}></ChildRef>
        <button onClick={this.clickHandler}>focus child input</button>
       
      </div>
    )
  }
}

export default ForwardRef