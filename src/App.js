import React, { useRef, useState } from "react";
import "./App.css";

function App() {

  const [color, setColor] = useState('')
  const refEle = useRef()

  function handelChange(){
    refEle.current.style.backgroundColor = color
  }

  return (
    <>
    <h1>Color Change Box</h1>
      <div className="main">
        <div ref={refEle} className="colorChange"></div>
        <input type="text" placeholder="Color-Name" value={color} onChange={(e)=>setColor(e.target.value)}/>
        <button onClick={handelChange}>CHANGE</button>
      </div>
    </>
  );
}

export default App;
