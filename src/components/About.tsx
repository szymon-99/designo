import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "homeInfo" } }) {
      nodes {
        id
        data {
          name
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
    image: {
      localFiles: URL[]
    }
  }
}

interface QueryInterface {
  allAirtable: {
    nodes: article[]
  }
}

const About = () => {
  const {
    allAirtable: { nodes: articles },
  } = useStaticQuery<QueryInterface>(query)

  return (
    <Wrapper className="section-center section">
      {articles.map(item => {
        const {
          id,
          data: { name, image },
        } = item
        const {
          localFiles: [data],
        } = image

        return (
          <article key={id}>
            <img src={data.publicURL} alt={name} />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
`

export default About
