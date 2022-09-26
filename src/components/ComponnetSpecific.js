import React, { Component } from 'react'
import style from "../style/style.module.css" // component specific 
 class ComponnetSpecific extends Component {
  render() {
    return (
      <>
      <h1 className={style.warning}>this is warning text</h1>
      </>
    )
  }
}

export default ComponnetSpecific