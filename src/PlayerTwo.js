import React from 'react'
import { render } from 'react-dom'

class PlayerTwo extends React.Component{

    constructor(props)
    {
        super(props);

    }

render(){
    return(
        <div style={{border : 'solid', borderColor: 'violet', borderWidth: 'thin', padding: '1em', margin: '1em'}}>
        <h2>PlayerTwo</h2>
        <div className='clearfix'/>        
        <label>My name is {this.props.name}</label>
        <div className='clearfix'> 
        <label className="btn btn-secondary">Played number of times {this.props.playerTwoScore}     </label>
        <button className="float-right"  style={{margin: '1em'}} disabled={!this.props.playerTwoButton} onClick={(e) => this.props.playerTwoClickedPlayEventHandler( e)} >{this.props.playerTwoButton ? 'Play':'This user is playing now'} </button>
        </div>
        </div>
    );
}
}
export default PlayerTwo