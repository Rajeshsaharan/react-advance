import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ClassRef extends Component {
    constructor(props) {
      super(props)
    this.compRef = React.createRef()
    this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.compRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <ChildRef ref = {this.compRef}/>
        <button onClick={this.clickHandler}>focus input</button>
      </div>
    )
  }
}

export default ClassRef