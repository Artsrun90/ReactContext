import React from 'react';
import Car from './Car';
import './App.css';

function App() {
  return (
    <div className="App">
      <Car name='BMW'>
      <div>Speed: 250km/h</div>
      </Car>
      <Car name='Audi' color='Red'/>
    </div>
  );
}

export default App;
