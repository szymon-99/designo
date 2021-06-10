import React, { FC } from "react"
import { graphql } from "gatsby"
import {
  Contact,
  AboutHero,
  AboutInfo,
  Locations,
  AboutInfoSecondary,
} from "../components"

const About: FC = () => {
  return (
    <main>
      <AboutHero />
      <AboutInfo />
      <Locations />
      <AboutInfoSecondary />
      <Contact />
    </main>
  )
}

export default About
