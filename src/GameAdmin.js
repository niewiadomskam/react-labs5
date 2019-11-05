import React from 'react'
import { render } from 'react-dom'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{
    constructor(){
        super();

        this.state={
            playerOneName: "",
            playerTwoName: ""
        }

        this.playerOneNameChanged= this.playerOneNameChanged.bind(this);
        this.playerTwoNameChanged = this.playerTwoNameChanged.bind(this);
    }

    playerOneNameChanged(e){
    this.setState({playerOneName:e.target.value});
}

    playerTwoNameChanged(e){
        this.setState({playerTwoName:e.target.value});
    }



    render(){
        return(
            <div>
     <PlayerOne name={this.state.playerOneName} />
     <PlayerTwo name = {this.state.playerTwoName}/>
     <div/>
<form>
    <label>Set name for Player One: </label>
 <input type="text" value={this.state.playerOneName} onChange={this.playerOneNameChanged} />
 <div margin ="5"/>
 <label>Set namefor Player Two: </label>
 <input type="text" value={this.state.playerTwoName} onChange={this.playerTwoNameChanged} />
 <div />
 </form>
 </div>
        );
    }
}
export default GameAdmin