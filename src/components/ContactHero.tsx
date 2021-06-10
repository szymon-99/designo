import React from "react"
import styled from "styled-components"
import ContactForm from "./Form"
import circle from "../assets/images/bg/contact-hero.svg"
import twoCircles from "../assets/images/bg/two-circles.svg"

const ContactHero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactForm />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--peach);
  color: var(--white);
  text-align: center;
  background-image: url(${twoCircles});

  background-repeat: no-repeat;

  .container {
    margin: 0 auto;
    padding: 3rem 0;
    width: 90vw;
    p {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 700px) {
    border-radius: var(--radius);
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    background-image: url(${circle});
    background-position-x: -50%;
    .container {
      padding: 3.5rem 4.5rem;
      width: auto;
    }
    .info {
      text-align: left;
    }
  }
  @media screen and (min-width: 992px) {
    background-position-x: -15%;
    .container {
      padding: 3.5rem 6rem;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      grid-gap: 3rem;
    }
  }
`

export default ContactHero
