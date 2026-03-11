import { useState } from "react"
import "./App.css"
export default function App(){
  const [count,setCount] = useState(0)
  const [input,setInput] = useState(0)

  // const increamentHandler = ()=>{
  //   setCount((prev)=>prev+1)
  // }
  
  // const decrementHandler=()=>{
  //   setCount((prev)=>prev-1)
  // }

  return(
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Counte is {count}</div>
      <div>
          <button 
          onClick={()=>setCount(count+1)}
          style={{margin:'0 10px'}}>
            Increase  
          </button>  
          
          <button 
          onClick={()=>setCount((prev)=>Math.max(prev-1,0))}
          style={{margin:'0 5px'}}>
            Decrease   
          </button> 

          <button 
          onClick={()=>setCount(0)}
          style={{margin:'0 5px'}}>
            Reset   
          </button>  

          <div style={{margin:"20px 0"}}>
              <input 
              style={{
                width:"100px",
                border:"1px solid white",
                margin:"0 5px",
                padding:"0.6em 1.2em" 
              }}
              value={input}
              onChange={(e)=>setInput(Number(e.target.value))}
              type="text" />
              
              <button 
              onClick={()=>{
                setInput(0)
                setCount(input)
              }}
              style={{margin:"0 10px"}}>Set to {input} </button>
          </div>
          
      </div>     
    </>
  )
}