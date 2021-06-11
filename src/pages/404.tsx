import React from "react"
import styled from "styled-components"
import { Button } from "../styles/Button"

const NotFoundPage = () => (
  <Wrapper className="section-center">
    <h1>Sorry this page doesn't exist</h1>
    <Button to="/">Back home</Button>
  </Wrapper>
)

const Wrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 40vh;
`

export default NotFoundPage
