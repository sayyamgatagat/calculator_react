import "./App.css";
import React, { useState } from "react";

function App() {
    const [status, setStatus] = useState("");
    const [result, setResult] = useState("");
    const [display, setDisplay] = useState("");

    function kbdInput(e){
        console.log(e);
    }

    function statusHandler(e) {
        try {
            if (
                e === "+" ||
                e === "-" ||
                e === "*" ||
                e === "/" ||
                e === "." ||
                e === "**" ||
                e === "%"
            ) {
                var n = status.length - 1;
                if (status.slice(-2) === "**") {
                    setStatus(status.slice(0, n - 1) + e);
                    console.log(status);
                } else if (
                    status[n] === "+" ||
                    status[n] === "-" ||
                    status[n] === "/" ||
                    status[n] === "*" ||
                    status[n] === "." ||
                    status[n] === "%"
                ) {
                    setStatus(status.slice(0, n) + e);
                    console.log(status);
                } else {
                    setStatus(status + e);
                    console.log(status);
                }
            } else if (result !== "") {
                setStatus(e);
                setResult("");
            } else {
                setStatus(status + e);
                console.log(status);
            }
        } catch {
            setStatus(status + e);
            console.log(status);
        }
    }
    function displayHandler(e) {
        try {
            if (
                e === "+" ||
                e === "-" ||
                e === "x" ||
                e === "/" ||
                e === "." ||
                e === "^" ||
                e === "%"
            ) {
                var n = display.length - 1;
                if (
                    display[n] === "+" ||
                    display[n] === "-" ||
                    display[n] === "/" ||
                    display[n] === "x" ||
                    display[n] === "." ||
                    display[n] === "^" ||
                    display[n] === "%"
                ) {
                    setDisplay(display.slice(0, n) + e);
                    console.log(display);
                } else {
                    setDisplay(display + e);
                    console.log(display);
                }
            } 
            else {
                setDisplay(display + e);
                console.log(display);
            }
        } catch {
            setDisplay(display + e);
            console.log(display);
        }
    }

    return (
        <div className="main">
            <h1>Calculator</h1>
            <div className="container">
                <div className="res">
                    <p className="eq">=</p>
                    <p className="result">{result}</p>
                </div>
                <input type="text" className="txt" value={display} onKeyPress ={(e)=>{kbdInput(e.target.value)}} ></input>
                <button
                    onClick={() => {
                        setStatus("");
                        setResult("");
                        setDisplay("");
                    }}
                    className="btnc spl"
                    id="c">
                    C
                </button>
                <button
                    className="btn+- spl"
                    id="+/-"
                    onClick={() => {
                        try {
                            var temp = -eval(status);
                            setResult(temp);
                            setStatus(temp);
                            setDisplay("");
                            console.log(typeof result);
                        } catch {
                            alert("Please check the expression");
                        }
                    }}>
                    +/-
                </button>
                <button
                    onClick={() => {
                        statusHandler("%");
                        displayHandler("%");
                    }}
                    className="btn% spl"
                    id="%">
                    %
                </button>
                <button
                    onClick={() => {
                        statusHandler("+");
                        setResult("");
                        displayHandler(result.toString() + "+");
                    }}
                    className="btn+ spl">
                    +
                </button>
                <button
                    onClick={() => {
                        statusHandler("1");
                        displayHandler("1");
                    }}
                    className="btn1">
                    1
                </button>
                <button
                    onClick={() => {
                        statusHandler("2");
                        displayHandler("2");
                    }}
                    className="btn2">
                    2
                </button>
                <button
                    onClick={() => {
                        statusHandler("3");
                        displayHandler("3");
                    }}
                    className="btn3">
                    3
                </button>
                <button
                    onClick={() => {
                        statusHandler("-");
                        setResult("");
                        displayHandler(result.toString() + "-");
                    }}
                    className="btn- spl">
                    -
                </button>
                <button
                    onClick={() => {
                        statusHandler("4");
                        displayHandler("4");
                    }}
                    className="btn4">
                    4
                </button>
                <button
                    onClick={() => {
                        statusHandler("5");
                        displayHandler("5");
                    }}
                    className="btn5">
                    5
                </button>
                <button
                    onClick={() => {
                        statusHandler("6");
                        displayHandler("6");
                    }}
                    className="btn6">
                    6
                </button>
                <button
                    onClick={() => {
                        statusHandler("*");
                        setResult("");
                        displayHandler(result.toString() + "x");
                    }}
                    className="btnx spl">
                    x
                </button>
                <button
                    onClick={() => {
                        statusHandler("7");
                        displayHandler("7");
                    }}
                    className="btn7">
                    7
                </button>
                <button
                    onClick={() => {
                        statusHandler("8");
                        displayHandler("8");
                    }}
                    className="btn8">
                    8
                </button>
                <button
                    onClick={() => {
                        statusHandler("9");
                        displayHandler("9");
                    }}
                    className="btn9">
                    9
                </button>
                <button
                    onClick={() => {
                        statusHandler("/");
                        setResult("");
                        displayHandler(result.toString() + "/");
                    }}
                    className="btn/ spl">
                    /
                </button>
                <button
                    onClick={() => {
                        statusHandler("**");
                        setResult("");
                        displayHandler(result.toString() + "^");
                    }}
                    className="btn^ spl">
                    ^
                </button>
                <button
                    onClick={() => {
                        statusHandler("0");
                        displayHandler("0");
                    }}
                    className="btn0">
                    0
                </button>
                <button
                    onClick={() => {
                        statusHandler(".");
                        displayHandler(".");
                    }}
                    className="btn. spl">
                    .
                </button>
                <button
                    onClick={() => {
                        try {
                            var res = eval(status);
                            setResult(res);
                            setStatus(res);
                            setDisplay("");
                        } catch {
                            alert("Please check the expression.");
                        }
                    }}
                    className="btn= spl">
                    =
                </button>
            </div>
        </div>
    );
}

export default App;
