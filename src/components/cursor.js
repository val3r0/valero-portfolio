import React from 'react'
import { useState } from "react"

import useMousePosition from "../hooks/mouseposition"

function Cursor () {

  //Tracking the mouse position.
  const { x, y } = useMousePosition(); 

 return (
     <div>
         <div 
        style = {{
          width: '10px',
          height: '10px',
          position: 'absolute',
          top:`${y}px`,
          left: `${x}px`,
          backgroundColor: 'white',
          transform: 'translate(-4px, -5px)',
          borderRadius: '100%',
          mixBlendMode: 'difference',
          zIndex: '9999',
          pointerEvents: 'none',
        }}>
      </div>
      <div 
        style = {{
          width: '30px',
          height: '30px',
          position: 'absolute',
          top:`${y}px`,
          left: `${x}px`,
          border: 'solid 2px white',
          transform: 'translate(-16px, -17px)',
          transition: '100ms',
          borderRadius: '100%',
          mixBlendMode: 'difference',
          zIndex: '9999',
          pointerEvents: 'none',
        }}>
      </div>
     </div>
 )
}

export default Cursor


