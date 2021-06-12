import React, { FC } from "react"
import styled from "styled-components"
import { Button } from "../styles/Button"
import bg from "../assets/images/bg/contact.svg"

const Contact: FC = () => {
  return (
    <Wrapper className="section-center">
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
  background-image: url(${bg});
  background-position: center right 60%;
  background-repeat: no-repeat;
  p {
    margin-top: 1.5rem;
  }
  a {
    margin-top: 2rem;
    display: inline-block;
  }
  @media screen and (min-width: 700px) {
    transform: translateY(25%);
    .info {
      max-width: 400px;
    }
  }
  @media screen and (min-width: 992px) {
    margin-top: 5rem;
    padding: 4.5rem 5.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    background-position: center right;
    .info {
      max-width: 450px;
    }
    a {
      margin: 0;
    }
  }
`
export default Contact
