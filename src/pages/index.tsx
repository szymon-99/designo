import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import {
  Contact,
  HomeHero,
  Services,
  Friends,
  Navbar,
  Footer,
  Layout,
} from "../components"
import { service } from "../../custom"

export type ServicesQueryProps = {
  allAirtable: {
    nodes: service[]
  }
}
export type HomePageProps = PageProps<ServicesQueryProps>

const HomePage: FC<HomePageProps> = ({ data }) => {
  const services = data.allAirtable.nodes

  return (
    <Layout>
      <main>
        <HomeHero />
        <Services services={services} homePage />
        <Friends />
        <Contact />
      </main>
    </Layout>
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
