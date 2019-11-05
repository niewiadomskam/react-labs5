import React from 'react'
import { render } from 'react-dom'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component{
    constructor(){
        super();

        this.state={
            playerOneName: "",
            playerTwoName: "",
            playerOneScore :0,
            playerTwoScore:0,
            playerOneButton : true,
            playerTwoButton : true
        }

        this.playerOneNameChanged= this.playerOneNameChanged.bind(this);
        this.playerTwoNameChanged = this.playerTwoNameChanged.bind(this);
        this.playerOneClickedPlayEventHandler = this.playerOneClickedPlayEventHandler.bind(this);
        this.playerTwoClickedPlayEventHandler = this.playerTwoClickedPlayEventHandler.bind(this);
    }

    playerOneNameChanged(e){
    this.setState({playerOneName:e.target.value});
}

    playerTwoNameChanged(e){
        this.setState({playerTwoName:e.target.value});
    }

    playerOneClickedPlayEventHandler(e)
    {
        this.setState({playerOneScore: this.state.playerOneScore+1, playerOneButton : false, playerTwoButton:true});

    }

    playerTwoClickedPlayEventHandler(e)
    {
        this.setState({playerTwoScore: this.state.playerTwoScore+1, playerOneButton:true, playerTwoButton:false});

    }

    render(){
        return(
            <div>
     <PlayerOne name={this.state.playerOneName} playerOneScore={this.state.playerOneScore} playerOneButton={this.state.playerOneButton} playerOneClickedPlayEventHandler = {this.playerOneClickedPlayEventHandler}/>
     <PlayerTwo name = {this.state.playerTwoName} playerTwoScore={this.state.playerTwoScore} playerTwoButton = {this.state.playerTwoButton} playerTwoClickedPlayEventHandler = {this.playerTwoClickedPlayEventHandler}/>
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