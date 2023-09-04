import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [color, setColor] = useState('')
  const refEle = useRef()
  const refEle2 = useRef()

  function handelChange(){
    refEle.current.style.backgroundColor = color
  }

  function reset(){
    refEle.current.style.backgroundColor = 'white'
    setColor('')
    refEle2.current.focus()
  }

  useEffect(()=>{
    refEle2.current.focus()
  },[])

  return (
    <>
    <h1>Color Change Box</h1>
      <div className="main">
        <div ref={refEle} className="colorChange"></div>
        <input ref={refEle2} type="text" placeholder="Color-Name" value={color} onChange={(e)=>setColor(e.target.value)}/>
        <button onClick={handelChange}>CHANGE</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
