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
        <label>Played number of times {this.props.playerTwoScore}     </label>
        <button disabled={!this.props.playerTwoButton} onClick={(e) => this.props.playerTwoClickedPlayEventHandler( e)} >{this.props.playerTwoButton ? 'Play':'This user is playing now'} </button>
        </div>
    );
}
}
export default PlayerTwo