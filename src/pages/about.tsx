import React, { FC } from "react"
import { graphql } from "gatsby"
import {
  Contact,
  AboutHero,
  AboutInfo,
  Locations,
  AboutInfoSecondary,
  Layout,
} from "../components"

const About: FC = () => {
  return (
    <Layout>
      <main>
        <AboutHero />
        <AboutInfo />
        <Locations />
        <AboutInfoSecondary />
        <Contact />
      </main>
    </Layout>
  )
}

export default About
