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

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
