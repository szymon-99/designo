import React, { FC } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Services, Contact, Gallery, ProjectsHero } from "../components"

import { service, project, description } from "../../custom"

type ProjectsQuery = {
  allAirtable: {
    nodes: project[]
  }
  services: {
    nodes: service[]
  }
  airtable: {
    data: description
  }
}

interface ProjectsProps {
  data: ProjectsQuery
}

const Projects: FC<ProjectsProps> = ({
  data: { services, allAirtable: projects, airtable: description },
}) => {
  console.log(projects.nodes[0].data.image.localFiles[0])
  return (
    <Wrapper>
      <ProjectsHero info={description.data} />
      <Gallery images={projects.nodes} />
      <Services services={services.nodes} />
      <Contact />
    </Wrapper>
  )
}

export const query = graphql`
  query GetPageQuery($slug: String) {
    allAirtable(filter: { table: { eq: $slug } }) {
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
