import React, { Component } from 'react'
class TernaryOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : false,
      }
    }
  render() {
    return (
        this.state.islogged ? <div><h1>hello user you are logged in</h1></div> 
        : <div><h1>hey please login</h1></div>
    )
    
  }
}

export default TernaryOperator