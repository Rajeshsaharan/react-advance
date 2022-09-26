import React, { Component } from 'react'

 class ChildRef extends Component {
    constructor(props) {
      super(props)
        this.childRef = React.createRef()
        this.focusInput = this.focusInput.bind(this)
    }
    focusInput(){
        this.childRef.current.focus()
    }

  render() {
    return (
      <div>
        <input type='text' ref = {this.childRef}></input>
        </div>
    )
  }
}

export default ChildRef