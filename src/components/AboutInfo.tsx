import React, { FC } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Wrapper from "../styles/AboutSection"
import aboutData from "../constants/about-content"
import Text from "./AboutText"

const AboutInfo: FC = () => {
  return (
    <InfoWrapper>
      <StaticImage
        src="../assets/images/about/info.jpeg"
        alt="women looking at paintings"
        placeholder="blurred"
        className="img"
      />
      <Text data={aboutData.primary} />
    </InfoWrapper>
  )
}

const InfoWrapper = styled(Wrapper)`
  h1 {
    color: var(--peach);
  }
  .bg {
    position: absolute;
    bottom: 0;
  }
`

export default AboutInfo
