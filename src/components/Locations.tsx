import React from "react"
import { Illustrations } from "../styles/Illustrations"
import styled from "styled-components"
import { QueryInterface } from "./Friends"
import { graphql, useStaticQuery } from "gatsby"
import Article from "./Article"

const query = graphql`
  {
    allAirtable(filter: { table: { eq: "aboutData" } }) {
      nodes {
        data {
          name
          image {
            localFiles {
              publicURL
            }
          }
        }
        id
      }
    }
  }
`

const Locations = () => {
  const {
    allAirtable: { nodes: articles },
  } = useStaticQuery<QueryInterface>(query)

  return (
    <Wrapper className="section section-center">
      {articles.map(item => {
        return <Article key={item.id} data={{ ...item }} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled(Illustrations)`
  grid-row-gap: 3rem;
  @media screen and (min-width: 700px) {
    grid-row-gap: 3.5rem;
    article {
      grid: initial;
      text-align: center;
    }
  }
`

export default Locations
