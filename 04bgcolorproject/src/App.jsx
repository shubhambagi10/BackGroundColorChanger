import { useState } from "react"


function App() {
  const [color,SetColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

  <button 
  onClick={()=>SetColor("Red")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"red"}} 
  >Red</button>

<button 
  onClick={()=>SetColor("green")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"green"}} 
  >Green</button>

<button 
  onClick={()=>SetColor("black")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"black"}} 
  >Black</button>

<button 
  onClick={()=>SetColor("orange")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"orange"}} 
  >Orange</button>

<button 
  onClick={()=>SetColor("grey")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"grey"}} 
  >Grey</button>

<button 
  onClick={()=>SetColor("yellow")}
  className="outline-none px-4 py-1 rounded flex text-black shadow-lg"
  style={{backgroundColor:"yellow"}} 
  >Yellow</button>

<button 
  onClick={()=>SetColor("purple")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"purple"}} 
  >Purple</button>

<button 
  onClick={()=>SetColor("pink")}
  className="outline-none px-4 py-1 rounded flex text-black shadow-lg"
  style={{backgroundColor:"pink"}} 
  >Pink</button>

<button 
  onClick={()=>SetColor("lavender")}
  className="outline-none px-4 py-1 rounded flex text-black shadow-lg"
  style={{backgroundColor:"lavender"}} 
  >Lavender</button>

<button 
  onClick={()=>SetColor("white")}
  className="outline-none px-4 py-1 rounded flex text-black shadow-lg"
  style={{backgroundColor:"white"}} 
  >White</button>

<button 
  onClick={()=>SetColor("blue")}
  className="outline-none px-4 py-1 rounded flex text-white shadow-lg"
  style={{backgroundColor:"blue"}} 
  >Blue</button>

    </div>
    </div>    
    </div>

     
    </>
  )
}

export default App
