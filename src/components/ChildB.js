import React, { Component } from 'react'
import shareFunction from './HighOrder'

export class ChildA extends Component {
  render() {
    
    return (
      <div> Child B{this.props.name}</div>
    )
  }
}

export default shareFunction(ChildA)