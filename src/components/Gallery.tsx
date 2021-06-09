import React, { FC } from "react"
import styled from "styled-components"
import { project } from "../../custom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      {images.map(item => {
        const image = item.data.image.localFiles[0]
        return (
          <GatsbyImage
            key={item.id}
            image={getImage(image)}
            alt={item.data.name}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Gallery
