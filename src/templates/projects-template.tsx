import React, { FC } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Services, Contact, Gallery } from "../components"

import { service, project } from "../../custom"

type description = {
  data: {
    desc: string
    name: string
  }
}

type ProjectsQuery = {
  allAirtable: {
    nodes: project[]
  }
  services: {
    nodes: service[]
  }
  airtable: description
}

interface ProjectsProps {
  data: ProjectsQuery
}

const Projects: FC<ProjectsProps> = ({
  data: { services, allAirtable, airtable },
}) => {
  const { desc, name } = airtable.data
  return (
    <Wrapper>
      <Gallery description={desc} images={allAirtable.nodes} name={name} />
      <Services services={services.nodes} />
      <Contact />
    </Wrapper>
  )
}

export const query = graphql`
  query GetPageQuery($slug: String) {
    allAirtable(filter: { table: { eq: "app-design" } }) {
      nodes {
        data {
          name
          desc
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
        id
      }
    }
    services: allAirtable(
      filter: { table: { eq: "pages" }, data: { slug: { ne: $slug } } }
    ) {
      nodes {
        data {
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
    airtable(table: { eq: "pages" }, data: { slug: { eq: $slug } }) {
      data {
        name
        desc
      }
    }
  }
`

const Wrapper = styled.main``

export default Projects
