import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Wrapper from "../styles/AboutSection"
import bg from "../assets/images/bg/contact-hero.svg"

const AboutHero = () => {
  return (
    <HeroWrapper>
      <StaticImage
        src="../assets/images/about/hero.jpeg"
        alt="workers"
        layout="fullWidth"
        placeholder="blurred"
        className="img"
      />
      <article>
        <div className="text">
          <h1>About us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </article>
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Wrapper)`
  background-color: var(--peach);
  color: var(--white);
  margin-top: 0;
  article {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: top left;
  }

  @media screen and (min-width: 700px) {
    article {
      background-size: 80%;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 470px;
    grid-template-rows: 480px;
    .img {
      grid-column: 2 / 3;
    }
    article {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
    }
  }
`
export default AboutHero
