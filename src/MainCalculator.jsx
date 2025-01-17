import React, { useState } from "react";
import "./calculator.css"; 

const MainCalculator = () => {
  const [result, setResult] = useState("");

 
  const displayContent = (content) => {
    setResult((prev) => prev + content);
  };

  const calcClear = () => {
    setResult("");
  };
  const calcOutput = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };
  const removeLastDigit = () => {
    setResult((prev) => prev.slice(0, -1));
  };
  return (
    <div className="calculator">
      <input type="text" placeholder="0" className="display" value={result} readOnly />
      <div className="BUTTONS">
        <button onClick={() => displayContent("7")} className="btn number">7</button>
        <button onClick={() => displayContent("8")} className="btn number">8</button>
        <button onClick={() => displayContent("9")} className="btn number">9</button>
        <button onClick={() => displayContent("+")} className="btn operator">+</button>

        <button onClick={() => displayContent("4")} className="btn number">4</button>
        <button onClick={() => displayContent("5")} className="btn number">5</button>
        <button onClick={() => displayContent("6")} className="btn number">6</button>
        <button onClick={() => displayContent("-")} className="btn operator">-</button>

        <button onClick={() => displayContent("1")} className="btn number">1</button>
        <button onClick={() => displayContent("2")} className="btn number">2</button>
        <button onClick={() => displayContent("3")} className="btn number">3</button>
        <button onClick={() => displayContent("*")} className="btn operator">*</button>

        <button onClick={calcClear} className="btn clear-all">AC</button>
        <button onClick={() => displayContent("0")} className="btn number">0</button>
        <button onClick={() => displayContent("/")} className="btn operator">/</button>
        <button onClick={calcOutput} className="btn operator">=</button>
        <button onClick={removeLastDigit} className="btn operator">&#9003;</button>
      </div>
    </div>
  );
};

export default MainCalculator;
