import React from 'react';
import NCAAPredictor from '../containers/ncaaPredictor';

const App = () => {
  return (
    <React.Fragment>
    <h1 className="text-center" style={{marginBottom: 30, color: 'white', fontSize: 50}}>BRACKET UNBUSTER</h1>
      <NCAAPredictor />      
    </React.Fragment>  
)};

export default App;