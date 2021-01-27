//import
import * as React from "react"

import { useState } from "react"

import styled, { createGlobalStyle } from 'styled-components'

import Navbar from "../components/navbar";
import Body from "../components/body";
import Footer from "../components/footer";
import Cursor from "../components/cursor";
import { CursorContext } from "../components/CursorContext";

//Global styles
const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-family: -apple-system, Roboto, sans-serif, serif;
    box-sizing: border-box;
    background-color: white;
    cursor: none !important;
  }

  button {
    cursor: none !important;
  }
`;

//styles 
const MainWrapper = styled.div`
  width: auto;
  height: 100vh;
  position: relative;
  padding: 0 10vw 0 10vw;
  display: grid;
  grid: 100px auto 200px / auto;
  z-index: 1;
`

function Index() { 

  const [value, setValue] = useState();
  console.log(`Index ${value}`)

  return (
    <div>
      <GlobalStyle/>
      <CursorContext.Provider value={{value, setValue}}>
      <MainWrapper>
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </MainWrapper>
      <Cursor/>
      </CursorContext.Provider>
    </div>
  )
}


export default Index
