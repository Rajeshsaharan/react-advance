import React, { Component } from 'react'

 class ListRender extends Component {
  render() {
    const names = ['rajesh', 'amit', 'rakesh']
    const namelist = names.map(name => { // we are trying to manipulate namelist and returning jsx to seperate elment
        return <h1>{name}</h1>
    })
    return (
      <div>
        {/* directly render in same elemet  */}
        <h1>{names}</h1>
         {/* to convert all itmes in sperate html tag we use map method */}
        {
            names.map((name)=>{
                return <h2>{name}</h2>
            })
        }

        {/* important ---> please try to do all javascript opertaion, expression and all other stuff outside  */}
        {/* the jsx and return from them and use them in jsx */}
       {
        namelist
       }
      </div>
    )
  }
}

export default ListRender