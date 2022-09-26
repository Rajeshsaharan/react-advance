import React, { Component } from 'react'
import Mycard from './Mycard'
class InlineHome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
      this.style = {
        fontSize : "30px",
        color : "red",
        backgroundColor : "black"
      }
    }
  render() {
    return (
     <>
     <h1 style={this.style}>my inline style</h1>
     {/* //passing style */}
     <Mycard style = {this.style}></Mycard>
     </>
    )
  }
}

export default InlineHome