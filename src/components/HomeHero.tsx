import React from "react"
import styled from "styled-components"
import { Button } from "../styles/Button"
import { StaticImage } from "gatsby-plugin-image"

const HomeHero = () => {
  return (
    <Wrapper>
      <div className="info">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Button to="about" color="light">
          Learn more
        </Button>
      </div>
      <StaticImage
        src="../assets/images/home/image-hero-phone.png"
        alt="phone"
        placeholder="blurred"
        className="img"
      />
      <StaticImage
        src="../assets/svgs/backgrounds/bg-pattern-hero-home.svg"
        alt="background"
        placeholder="blurred"
        className="bg"
        layout="fixed"
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--peach);
  color: var(--white);
  text-align: center;
  overflow: hidden;
  display: grid;
  max-width: 100vw;
  grid-template-rows: 1fr 420px;
  position: relative;
  z-index: 1;
  place-items: center;

  .info {
    padding: 5rem 2rem 0;

    p {
      margin: 1rem 0 2rem;
    }
  }
  .img {
    pointer-events: none;
  }
  .bg {
    position: absolute;
    top: 13%;
    left: 0;
    z-index: -1;
  }
  .img {
    transform: translateY(15%);
  }
  @media screen and (min-width: 700px) {
    border-radius: var(--radius);
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    .info {
      padding: 4rem 4rem 0;
    }
    p {
      padding: 0 2rem;
    }
    .bg {
      left: 20%;
    }
  }
  @media screen and (min-width: 1200px) {
    text-align: left;
    grid-template-columns: 1fr auto;
    grid-template-rows: 640px;
    .info {
      padding: 0 0 0 6rem;
    }
    p {
      padding: initial;
    }
    .bg {
      top: 0;
      right: 0;
      left: initial;
    }
  }
`

export default HomeHero
