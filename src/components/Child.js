import React, { Component } from 'react'
import {UserConsumer} from "./UserContext"
 class Child extends Component {
  render() {
    return (
      <>
      <UserConsumer>
        {
            (value)=>{
                return <h1>hello {value}</h1>
            }
        }
      </UserConsumer>
      
      </>
    )
  }
}

export default Child