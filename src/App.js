import React from 'react';
import Signs from './components/Signs'
import Horoscope from './components/Horoscope'


import './App.css';

function App() {
  return (
    <>
      <div className="black">
        <Signs />
      </div>
      <div className="white">
        <h2>Horoscope</h2>
        <Horoscope />
      </div>
    </>
  );
}

export default App;
