import React, { Component } from 'react'

class ObjectList extends Component {
    render() {
        const users = [
            {
                id: 1,
                name: 'amit',
                course: "brt",
            },

            {
                id: 2,
                name: "rakesh",
                course: "bpt"
            }
        ]

        const userlist = users.map((user)=>{
            return <h1>hello my name is {user.name} and my course is {user.course}</h1>
        })
        return (
            <div>
                {userlist}
            </div>
        )
    }
}

export default ObjectList