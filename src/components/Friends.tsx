import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Illustrations } from "../styles/Illustrations"
import Article from "./Article"
import { SVGQuery } from "../../custom"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "homeData" } }) {
      nodes {
        id
        data {
          name
          desc
          image {
            localFiles {
              publicURL
            }
          }
        }
      }
    }
  }
`
const About = () => {
  const {
    allAirtable: { nodes: articles },
  } = useStaticQuery<SVGQuery>(query)

  return (
    <Illustrations className="section-center section">
      {articles.map(item => {
        return <Article key={item.id} data={{ ...item }} description />
      })}
    </Illustrations>
  )
}

export default About
