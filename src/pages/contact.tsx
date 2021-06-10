import React from "react"
import { Navbar, Footer, Locations, ContactHero } from "../components"

const contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <Locations />
      </main>
      <Footer contactPage />
    </>
  )
}

export default contact
