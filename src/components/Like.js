import React, { Component } from 'react'

 class Like extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         like : 0,
      }
    }
    likePost(){
        //two way to do it
        //first one

        // this.setState({
        //     like : this.state.like + 1
        // }
        
        // )

        //second way

        this.setState((prevState)=>{
            return {
                like : prevState.like + 1
            }
        }, console.log("post liked"))
    }
    

  render() {
    return (
      <div>
        <button onClick={()=>this.likePost()}>like {this.state.like}</button>
      </div>
    )
  }
}

export default Like