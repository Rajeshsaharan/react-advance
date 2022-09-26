import React, { Component } from 'react'

class Ref extends Component {
    constructor(props) {
      super(props)
      this.ref = React.createRef()
    }

    componentDidMount(){
     this.ref.current.focus()
    }
  render() {
    return (
      <div>
        <input type = "email" ref={this.ref}></input>
      </div>
    )
  }
}

export default Ref