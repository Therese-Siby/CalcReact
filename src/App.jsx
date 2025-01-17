import React, { useState } from 'react';
import './App.css';  // Import your CSS file

const App = () => {
  const [display, setDisplay] = useState('');  // This is the state for the calculator display

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());  // Using eval to evaluate the expression
    } catch {
      setDisplay('Error');  // Show Error if calculation fails
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={display} disabled />
      </div>
      <div className="buttons">
        {/* Buttons for digits and operations */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default App;
