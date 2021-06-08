import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Illustrations } from "../styles/Illustrations"

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

type article = {
  id: string
  data: {
    name: string
    desc: string
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
        const {
          id,
          data: { name, image, desc },
        } = item
        const {
          localFiles: [data],
        } = image

        return (
          <article key={id}>
            <div className="img">
              <img src={data.publicURL} alt={name} />
              <div className="bg"></div>
            </div>
            <div>
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </Illustrations>
  )
}

export default About
