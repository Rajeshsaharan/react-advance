import React from 'react'

function ObjectPerson(props) {
    const {person} = props;
  return (
    <div>
        <h1>hello my name is {person.name} and my job is {person.job}</h1>
    </div>
  )
}

export default ObjectPerson