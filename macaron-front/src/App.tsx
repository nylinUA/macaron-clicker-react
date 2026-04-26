import { useState } from 'react'
import pinkBigMacaron from './assets/macaron.png'
import pinkSmallMacaron from './assets/macaron_small.png'
import './App.css'




function App() {
  const [count, setCount] = useState(0)
  const [smallMacaron, setSmallMacaron] = useState(pinkSmallMacaron)
  const [bigMacaron, setBigMacaron] = useState(pinkBigMacaron)
  const [macaron, setMacaron] = useState(false)




  return (
    <>
      <section id="center-macaron" className="noselect">
        <h1>{count}</h1>
        <img src={macaron ? bigMacaron: smallMacaron} 
              id="main-macaron" 
              alt="Macaron"
              draggable="false"

              // Scuffed clicking logic that doesn't feel smooth

              // big macaron picture when mouse goes over
              onMouseOver={()=>
                setMacaron(true)
              }

              // small macaron picture when mouse leaves
              onMouseLeave={()=>
                setMacaron(false)
              }

              // small macaron picture when mouse presses down
              onMouseDown={()=>
                setMacaron(false)
              }
              // big macaron picture comes back when mouse releases
              onMouseUp={()=>{
                  setMacaron(true)
                  setCount((count) => count + 1)
                }
                
              }
              />
      </section>
    </>
  )
}

export default App
