//import
import * as React from "react"
import { useContext } from "react"

import styled from 'styled-components'

import { CursorContext } from "./CursorContext"


//styles
const Wrapper = styled.div`
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    background: green;
    z-index: 999;
`
const Logo = styled.div`
    width: 200px;   //TODO: Adjust width to content 
    height: 100px;
    background: lightcoral;
    text-align: center;
    z-index: 999;
`
const Menu = styled.div`
    width: 200px; //TODO: Adjust width to content
    height: 100px;
    margin: 0 0 0 auto;
    background: lightcoral;
    z-index: 999;
`


function Navbar() {

    const {value, setValue} = useContext(CursorContext);
    const  changeValue = () => setValue(!value)
    console.log(`navbar ${value}`)

    return (
        <div>
            <Wrapper>
                <Logo>valero.</Logo>
                <Menu>
                    <p>Work</p> 
                    <button onMouseEnter={() => {changeValue()}} 
                    onMouseLeave={() => {changeValue()}}>Blog</button>
                </Menu>
            </Wrapper>
        </div>
    )
}

export default Navbar