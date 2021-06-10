import React, { FC } from "react"
import styled from "styled-components"
import { description } from "../../custom"
import bg from "../assets/images/bg/gallery-intro.svg"
import circle from "../assets/images/bg/circle.svg"

interface ProjectsHeroProps {
  info: description
}

const ProjectsHero: FC<ProjectsHeroProps> = ({ info }) => {
  return (
    <Wrapper>
      <div className="info">
        <h1>{info.name}</h1>
        <p>{info.desc}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--peach);
  background-image: url(${circle});
  background-repeat: no-repeat;
  background-size: 300px 300px;
  background-position: right 20%;

  .info {
    text-align: center;
    margin: 6rem 0rem;
    width: 90vw;
    color: var(--white);
    h1 {
      text-transform: capitalize;
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 700px) {
    background-image: url(${bg});
    background-size: auto;
    background-position: top 50% right;
    background-repeat: no-repeat;
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    border-radius: var(--radius);
  }
`

export default ProjectsHero
