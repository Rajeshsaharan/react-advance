import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email : "",
         password : "",
         course : "",
         logMessage : ""
      }
      this.passwordHandler = this.passwordHandler.bind(this)
      this.emailHandler = this.emailHandler.bind(this)
      this.courseHandler = this.courseHandler.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    emailHandler(e){
        this.setState({email : e.target.value})
    }
    passwordHandler(e){
        this.setState({password : e.target.value})
    }
    courseHandler(e){
        this.setState({course : e.target.value})
    
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({message : `your email is ${this.state.email} and you are taking now ${this.state.course} and login successful`})
    }
  render() {
    const {email, password, course} = this.state
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Email</label>
        <input type= "email" value = {email} onChange = {this.emailHandler}></input>
        <label>Password</label>
        <input type = "password" value={password} onChange = {this.passwordHandler}></input>
      
        </div>
        <div>
            <select value={course} onChange= {this.courseHandler}>
                <option value = "brt">BRT</option>
                <option value = "bpt">BPT</option>
                <option value = "mbbs">MBBS</option>
            </select>
        </div>
        <button type='submit'>submit</button>
        </form>
        <h1>{this.state.message}</h1>
      </>
    )
  }
}

export default LoginForm