import React, { FC } from "react"
import styled from "styled-components"
import { project } from "../../custom"
import GalleryImage from "./GalleryImage"

interface GalleryProps {
  images: project[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Wrapper className="section-center section">
      {images.map(item => {
        const image = item.data.image.localFiles[0]
        const { name, desc } = item.data

        return <GalleryImage image={image} name={name} desc={desc} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Gallery
