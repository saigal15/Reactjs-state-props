import React, { Component } from 'react';
import User from './User';

class Users extends Component {
state = {users:[
    {name:"Jhon", age:20},
    {name:"Jacky", age:30},
    {name:"Tomy", age:40}
],
title:"State & Props Example"

};
makeMeYounger = () => {
    this.setState({
        users:[
            {name:"Jhon", age:10},
            {name:"Jacky", age:20},
            {name:"Tomy", age:30}
        ]
    })
}

    render() {
        return (
            <div>
            <h1>{this.state.title}</h1>
            <button onClick={this.makeMeYounger}>Make us younger</button>
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            </div>
        )
    }
}

export default Users;