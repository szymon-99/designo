import React, { FC } from "react"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import styled from "styled-components"

interface GalleryImageProps {
  name: string
  desc: string
  image: ImageDataLike
}

const GalleryImage: FC<GalleryImageProps> = ({ name, desc, image }) => {
  return (
    <Wrapper>
      <GatsbyImage image={getImage(image)} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: grid;
  border-radius: var(--radius);
  background-color: var(--light-pink);
  overflow: hidden;
  grid-template-rows: 320px auto;
  transition: var(--transition);
  :hover {
    background-color: var(--peach);
    color: var(--white);
    div {
      h3 {
        color: inherit;
      }
    }
  }
  div {
    text-align: center;
    padding: 2rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      text-transform: uppercase;
      color: var(--peach);
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: initial;
  }
`

export default GalleryImage
