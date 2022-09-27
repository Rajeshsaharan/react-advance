import React, { Component } from 'react'
import shareFunction from './HighOrder'

export class ChildA extends Component {
  render() {

    return (
        <div>
             <div> ChildA {this.props.name}</div>
      <button onClick={this.props.anyprops}>button</button>
    

        </div>
     )
  }
}

export default shareFunction(ChildA)