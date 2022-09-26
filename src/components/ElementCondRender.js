import React, { Component } from 'react'

 class ElementCondRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : false,
      }
    }
  render() {
    let dynamicElement ;
    if(this.state.islogged){
        dynamicElement = <h1> hello your username , now you can comment or like</h1>
    }else{
        dynamicElement = <h1> hello guest , please login first</h1>
    }
    return (
      <div>{dynamicElement}</div>
    )
  }
}

export default ElementCondRender