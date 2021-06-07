import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Contact, HomeHero, Services, About } from "../components"

export type HomeData = {
  data: {
    name: string
    image: {
      localFiles: any[]
    }
    huge: boolean
  }
  id: string
}

export type ServicesQueryProps = {
  allAirtable: {
    nodes: HomeData[]
  }
}
export type HomePageProps = PageProps<ServicesQueryProps>

const HomePage: FC<HomePageProps> = ({ data }) => {
  const services = data.allAirtable.nodes

  return (
    <>
      <HomeHero />
      <Services services={services} />
      <About />
      <Contact />
    </>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "pages" } }) {
      nodes {
        data {
          huge
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage
