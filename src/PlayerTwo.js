import React from 'react'
import { render } from 'react-dom'

class PlayerTwo extends React.Component{

    constructor(props)
    {
        super(props);
         
    }

render(){
    return(
        <div>
        <h2>PlayerTwo</h2>
        <label>My name is {this.props.name}</label>
        <div/>
        <label>Played number of times {this.props.playedGames}</label>
        </div>
    );
}
}
export default PlayerTwo