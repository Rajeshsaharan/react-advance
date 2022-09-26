import React, { Component } from 'react'
class ShortCircuit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : true,
      }
    }
  render() {
    // only shows element when value is true
    return (
      this.state.islogged && <div><h1>you are logged in </h1></div>
    )
  }
}

export default ShortCircuit