import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Illustrations } from "../styles/Illustrations"
import Article from "./Article"

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

type URL = {
  publicURL: string
}

export type article = {
  id: string
  data: {
    name: string
    desc?: string
    image: {
      localFiles: URL[]
    }
  }
}

export interface QueryInterface {
  allAirtable: {
    nodes: article[]
  }
}

const About = () => {
  const {
    allAirtable: { nodes: articles },
  } = useStaticQuery<QueryInterface>(query)

  return (
    <Illustrations className="section-center section">
      {articles.map(item => {
        return <Article key={item.id} data={{ ...item }} description />
      })}
    </Illustrations>
  )
}

export default About
