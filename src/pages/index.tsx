import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Contact, HomeHero, Services } from "../components"

export type HomeData = {
  data: {
    desc: string
    name: string
    image: {
      localFiles: any[]
    }
  }
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
      <Contact />
    </>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "pages" } }) {
      nodes {
        data {
          desc
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
