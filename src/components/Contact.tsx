import React, { FC } from "react"
import styled from "styled-components"
import { Button } from "../styles/Button"
import { StaticImage } from "gatsby-plugin-image"

const Contact: FC = () => {
  return (
    <Wrapper className="section-center">
      <StaticImage
        src="../assets/svgs/backgrounds/bg-pattern-call-to-action.svg"
        className="bg-img"
        alt="background"
        placeholder="blurred"
      />
      <div className="info">
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button to="/contact" color="light">
        get in touch
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background-color: var(--peach);
  color: var(--white);
  text-align: center;
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transform: translateY(50%);
  display: grid;
  place-items: center;

  p {
    margin-top: 1.5rem;
  }
  a {
    margin-top: 2rem;
    display: inline-block;
  }
  .bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transform: scale(2.5);
    z-index: -1;
  }
  @media screen and (min-width: 700px) {
    transform: translateY(25%);
    .bg-img {
      transform: scale(1.2);
    }
    .info {
      max-width: 400px;
    }
  }
  @media screen and (min-width: 1100px) {
    margin-top: 5rem;
    padding: 4.5rem 5.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    .info {
      max-width: 450px;
    }
    a {
      margin: 0;
    }
    .bg-img {
      transform: scale(1);
      left: 20%;
    }
  }
`
export default Contact