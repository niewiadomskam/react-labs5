import React from 'react'
import { render } from 'react-dom'
import GameAdmin from './GameAdmin'

class App extends React.Component {

  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
  <div>
  <h1>Minimal React</h1> 
  <GameAdmin /> 
  </div>
  );
  }
}

export default App