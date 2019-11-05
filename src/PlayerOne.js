import React from 'react'
import { render } from 'react-dom'

class PlayerOne extends React.Component{

    constructor(props)
    {
        super(props);

    }

render(){
    return(
        <div>
        <h2>PlayerOne</h2>
        <label>My name is {this.props.name}</label>
        </div>
    );
}
}
export default PlayerOne