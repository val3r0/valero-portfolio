import React from 'react'
import { useState } from "react"

import styled from 'styled-components'

import useMousePosition from "../hooks/mouseposition"

const InnerCircle = styled.div`
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    transform: translate(-4px, -5px);
    border-radius: 100%;
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 9999;
`
const OuterCircle = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    transform: translate(-16px, -17px);
    border-radius: 100%;
    border: solid 2px white;
    transition: 100ms;
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 9999;
`

function Cursor () {

  //Tracking the mouse position.
  const { x, y } = useMousePosition(); 

 return (
    <div>
        <InnerCircle
            style = {{
                top:`${y}px`,
                left:`${x}px`,
            }}>
        </InnerCircle>  
        <OuterCircle 
            style = {{
                top:`${y}px`,
                left: `${x}px`,
            }}>
        </OuterCircle>
    </div>
 )
}

export default Cursor


