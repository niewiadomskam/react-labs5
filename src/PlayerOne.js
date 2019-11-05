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
        <div/>
        <label>Played number of times {this.props.playerOneScore}     </label>
        <button onClick={(e) => this.props.playerOneClickedPlayEventHandler( e)} disabled={!this.props.playerOneButton}>{this.props.playerOneButton ? 'Play':'This user is playing now'} </button>
        </div>
    );
}
}
export default PlayerOne