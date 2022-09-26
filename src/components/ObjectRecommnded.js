//recommnded way to handle list 

import React, { Component } from 'react'
import ObjectPerson from './ObjectPerson'
class ObjectRecommnded extends Component {
  render() {
    const persons = [
        {
            id : 1,
            name : "amit",
            job : "washer"
        },
        {
            id : 2,
            name : "rakesh",
            job : "peon"
        }
    ]

    //handle refactor in another component to give best view

    const personlist = persons.map((person)=>{
        //each child must have a key unique 
        return <ObjectPerson key = {person.id} person = {person}></ObjectPerson>
    })
    return (
      <div>{personlist}</div>
    )
  }
}

export default ObjectRecommnded