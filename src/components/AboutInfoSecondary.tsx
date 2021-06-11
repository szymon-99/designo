import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Wrapper from "../styles/AboutSection"
import aboutData from "../constants/about-content"
import Text from "./AboutText"

const AboutInfoSecondary = () => {
  return (
    <InfoWrapper>
      <StaticImage
        src="/assets/images/about/info2.jpeg"
        alt="women looking at paintings"
        placeholder="blurred"
        className="img"
      />
      <Text data={aboutData.secondary} />
    </InfoWrapper>
  )
}

const InfoWrapper = styled(Wrapper)`
  margin-top: 120px;
  h1 {
    color: var(--peach);
  }
  .bg {
    position: absolute;
    bottom: 0;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 470px;

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

export default AboutInfoSecondary
