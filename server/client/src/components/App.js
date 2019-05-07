import React from 'react';
import NCAAPredictor from '../containers/ncaaPredictor';

const App = () => {
  return (
    <React.Fragment>
    <h1 className="text-center" style={{marginBottom: 30, color: 'white'}}>Bracket Un-Buster</h1>
      <NCAAPredictor />
      
    </React.Fragment>
  
)};

export default App;