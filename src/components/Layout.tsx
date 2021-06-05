import React, { FC } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
