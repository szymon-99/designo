import React from "react"
import GlobalStyle from "./src/styles/GlobalStyle"
import { Layout } from "./src/components"

export const rootWrapper = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
export const pageWrapper = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
