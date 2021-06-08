import React, { FC } from "react"
import Circles from "../assets/svgs/backgrounds/three-circles.svg"
import { aboutContent } from "../constants/about-content"

interface TextProps {
  data: aboutContent
}

const AboutText: FC<TextProps> = ({ data }) => {
  const { primaryText, secondaryText, title } = data
  return (
    <article>
      <div className="bg">
        <Circles />
      </div>
      <div className="text">
        <h1>{title}</h1>
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
      </div>
    </article>
  )
}

export default AboutText
