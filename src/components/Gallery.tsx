import React, { FC } from "react"
import styled from "styled-components"
import { project } from "../../custom"
import { GatsbyImage } from "gatsby-plugin-image"

interface GalleryProps {
  name: string
  description: string
  images: project[]
}

const Gallery: FC<GalleryProps> = ({ name, description, images }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Gallery
