import React, { Component } from 'react'
import '../style/style.css'

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : false,
      }
    }
  render() {
    const className = this.state.islogged ? "primary" : "secondary"
    return (
      <>
      {/* also can use another class as template string */}
      <h1 className={`${className} font-xl` }> hello world</h1>
      </>
    )
  }
}

export default Home