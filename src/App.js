import "./App.css";
import React, { useState } from "react";
// import Input from './input';
import Button from "./button";

function App() {
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");

  function statusHandler(e) {
    setStatus(status + e);
    console.log(status);
  }
  function displayHandler(e) {
    setDisplay(display + e);
  }

  return (
    <div className="main">
      <h1>Calculator</h1>
      <div className="container">
        <div className="res">
          <p className="eq">=</p>
          <p className="result" >
            {result}
          </p>
        </div>
        <input type="text" className="txt" value={display}></input>
        <button
          onClick={() => {
            setStatus("");
            setResult("");
            setDisplay("");
          }}
          className="btnc spl"
          id="c"
        >
          C
        </button>
        <button
          className="btn+- spl"
          id="+/-"
          onClick={() => {
            setResult(-eval(status));
            setStatus("");
          }}
        >
          +/-
        </button>
        <button
          onClick={() => {
            statusHandler("%");
            displayHandler("%");
          }}
          className="btn% spl"
          id="%"
        >
          %
        </button>
        <button
          onClick={() => {
            statusHandler("+");
            setResult("");
            displayHandler(result.toString() + "+");
          }}
          className="btn+ spl"
        >
          +
        </button>
        <button
          onClick={() => {
            statusHandler("1");
            displayHandler("1");
          }}
          className="btn1"
        >
          1
        </button>
        <button
          onClick={() => {
            statusHandler("2");
            displayHandler("2");
          }}
          className="btn2"
        >
          2
        </button>
        <button
          onClick={() => {
            statusHandler("3");
            displayHandler("3");
          }}
          className="btn3"
        >
          3
        </button>
        <button
          onClick={() => {
            statusHandler("-");
            setResult("");
            displayHandler(result.toString() + "-");
          }}
          className="btn- spl"
        >
          -
        </button>
        <button
          onClick={() => {
            statusHandler("4");
            displayHandler("4");
          }}
          className="btn4"
        >
          4
        </button>
        <button
          onClick={() => {
            statusHandler("5");
            displayHandler("5");
          }}
          className="btn5"
        >
          5
        </button>
        <button
          onClick={() => {
            statusHandler("6");
            displayHandler("6");
          }}
          className="btn6"
        >
          6
        </button>
        <button
          onClick={() => {
            statusHandler("*");
            setResult("");
            displayHandler(result.toString() + "x");
          }}
          className="btnx spl"
        >
          x
        </button>
        <button
          onClick={() => {
            statusHandler("7");
            displayHandler("7");
          }}
          className="btn7"
        >
          7
        </button>
        <button
          onClick={() => {
            statusHandler("8");
            displayHandler("8");
          }}
          className="btn8"
        >
          8
        </button>
        <button
          onClick={() => {
            statusHandler("9");
            displayHandler("9");
          }}
          className="btn9"
        >
          9
        </button>
        <button
          onClick={() => {
            statusHandler("/");
            setResult("");
            displayHandler(result.toString() + "/");
          }}
          className="btn/ spl"
        >
          /
        </button>
        <button
          onClick={() => {
            statusHandler("**");
            setResult("");
            displayHandler(result.toString() + "^");
          }}
          className="btn^ spl"
        >
          ^
        </button>
        <button
          onClick={() => {
            statusHandler("0");
            displayHandler("0");
          }}
          className="btn0"
        >
          0
        </button>
        <button
          onClick={() => {
            statusHandler(".");
            displayHandler(".");
          }}
          className="btn. spl"
        >
          .
        </button>
        <button
          onClick={() => {
            var res = eval(status);
            setResult(res);
            setStatus(res);
            setDisplay("");
          }}
          className="btn= spl"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
