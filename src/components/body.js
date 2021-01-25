//import
import * as React from "react"

import styled from 'styled-components'

//styles
const Wrapper = styled.div`
    width: auto;
    height: 100%;
    background: lightgreen;
`

function Body() {
    return (
        <div>
            <Wrapper>BODY</Wrapper>
        </div>
    )
}

export default Body