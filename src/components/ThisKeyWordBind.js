import React, { Component } from 'react'

 class ThisKeyWordBind extends Component {
    constructor(props) {
      super(props)
      //bind it in any constrctor best way 0
      this.click = this.click.bind(this) // because bind function always return a function
    
      this.state = {
         count : 0,
      }
    }

    click(){
        console.log(this)
        this.setState({count : this.state.count + 1})
    }
    // fouth way best way 1

    anyfunc=()=>{
        console.log(this) // this refer to class
    }
  render() {
    return (
        <>
        <div>{this.state.count}</div>
        {/* here this going out of scope  */}
        {/* we are calling it from here into dom so it lost it this refrence */}
        <button onClick = {this.click}>click</button> 
        {/* solution first  */}
         <button onClick={()=>this.click()}>click</button> 
         {/* solution second */}
         <button onClick={this.click.bind(this)}>click</button>
         {/* third solution */}
         {/* bind it any constructor */}
         {/* fourth solution */}
         {/* use arrow function to define function */}
        </>
      
    )
  }
}

export default ThisKeyWordBind