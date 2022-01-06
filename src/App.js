import React, { useState } from 'react';
import './App.css';
import InputValue from './components/form/Form';
import DisplayNumbers from './components/calculate/DisplayNumbers';


function App() {
  // state
  const [inputNumber, setInputNumber] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sides, setSides] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-title">Polygonal numbers</h1>
        <p>Choose a number between 3 and 1,000,000.</p>
        <InputValue sides={sides} setSides={setSides} inputNumber={inputNumber} setInputNumber={setInputNumber} numbers={numbers} setNumbers={setNumbers} />
      </div>
      <div className="App-content">
        <DisplayNumbers sides={sides} numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
