import React, { Component } from 'react'

 class DestrctPropsState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "amit",
         age : 23,
         course : "brt"
      }
    }

    // destructre

   
  render() {
    const {name , age , course} = this.state
    const {bio , children} = this.props
    return (
        <>
          <div>{name} {age} {bio} {course}</div>
          {children}
        </>
    
    )
  }
}

export default DestrctPropsState