import React from 'react'
import { useContext } from "react"

import styled from 'styled-components'

import useMousePosition from "../hooks/mouseposition"
import { CursorContext } from "./CursorContext"

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
    width: ${({value}) => (value ? "54px" : "30px")};
    height: ${({value}) => (value ? "54px" : "30px")};
    position: absolute;
    transform: ${({value}) => (value ? "translate(-28px, -29px)" : "translate(-16px, -17px)")};
    border-radius: 50%;
    border: solid 2px white;
    transition: top 120ms, left 120ms, transform 500ms, width 500ms, height 500ms;
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 9999;
`

function Cursor () {

  //Tracking the mouse position.
  const { x, y } = useMousePosition(); 

  //Context provider
  const {value, setValue} = useContext(CursorContext);
  console.log(`cursor ${value}`) 

 return (
    <div>
        <InnerCircle
            style = {{
                top:`${y}px`,
                left:`${x}px`,
            }}>
        </InnerCircle>  
        <OuterCircle value={value}
            style = {{
                top:`${y}px`,
                left: `${x}px`,
            }}>
        </OuterCircle>
    </div>
 )
}

export default Cursor


