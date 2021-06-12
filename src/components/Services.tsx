import React, { FC } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"
import slugify from "slugify"
import { service } from "../../custom"

interface ServicesProps {
  services: service[]
  homePage?: boolean
}

const Services: FC<ServicesProps> = ({ services, homePage }) => {
  return (
    <Wrapper className="section-center section">
      {services.map(item => {
        const { id, data } = item
        const { name, huge } = data
        const image = data.image.localFiles[0]
        const slug = slugify(name, { lower: true })

        return (
          <article key={id} className={homePage && huge ? "huge" : undefined}>
            <div className="bg"></div>
            <GatsbyImage image={getImage(image)} alt={name} className="img" />
            <div className="info">
              <h2>{name}</h2>
              <Link to={`/${slug}`}>
                view projects{" "}
                <span>
                  <RiArrowRightSLine />
                </span>
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-auto-rows: 300px;
  grid-row-gap: 1.5rem;

  article {
    border-radius: var(--radius);
    position: relative;
    color: var(--white);
    text-transform: uppercase;
    overflow: hidden;
    :hover .bg {
      background: var(--peach);
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: #000000;
      opacity: 0.5;
      transition: var(--transition);
    }
    .info {
      position: absolute;
      text-align: center;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
    }
    h2 {
      margin-bottom: 2rem;
    }
    a,
    span {
      font-size: 1rem;
      letter-spacing: 5px;
      display: inline-flex;
      align-items: center;
    }
    a {
      color: var(--white);
    }
    span {
      color: var(--peach);
    }
    .img {
      height: 100%;
    }
  }

  @media screen and (min-width: 700px) {
    grid-auto-rows: 200px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    column-gap: 2rem;
    .huge {
      grid-row: 1 / 3;
    }
  }
`

export default Services
