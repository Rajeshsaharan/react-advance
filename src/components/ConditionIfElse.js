import React, { Component } from 'react'

class ConditionIfElse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : true,
      }
    }
  render() {
    // we cant use if else directly between jsx
   if(this.state.islogged){
    return (
        <div>
            <h1>
            hello your username , now you can comment or like post </h1>
        </div>
    )
   }else{
    return (
        <div>
            <h1> hellon guest , please login/singup</h1>
        </div>
    )
   }
  }
}

export default ConditionIfElse