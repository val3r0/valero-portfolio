//import
import * as React from "react"

import styled from 'styled-components'


//styles
const Wrapper = styled.div`
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    background: lightblue;
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

    return (
        <div>
            <Wrapper>
                <Logo>valero.</Logo>
                <Menu>
                    <p>Work</p> 
                    <p>Blog</p>
                </Menu>
            </Wrapper>
        </div>
    )
}

export default Navbar