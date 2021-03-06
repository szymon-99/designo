import React, { FC } from "react"
import slugify from "slugify"
import styled from "styled-components"
import { location } from "../constants/locations"
import Map from "./Map"
import Bg from "../assets/images/bg/two-circles-light.svg"

interface MapProps {
  location: location
  reverse?: boolean
}

const MapCell: FC<MapProps> = ({ location: { map, mapInfo }, reverse }) => {
  const { cords } = map
  const { name, shortcut, number, mail, adress } = mapInfo
  const slug = slugify(name)
  console.log(slug)
  return (
    <Wrapper id={slug} reverse={reverse ? true : false}>
      <Map cords={cords} />
      <div className="info">
        <h1>{name}</h1>
        <div className="container">
          <div className="adress">
            <p>
              <span>Designo {shortcut} Office</span>
            </p>
            {adress.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className="contact">
            <p>
              <span>Contact</span>
            </p>
            <p>P : {number}</p>
            <p>M : {mail}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

interface WrapperProps {
  reverse: boolean
}
const Wrapper = styled.section<WrapperProps>`
  margin-bottom: 2.6rem;
  display: grid;
  grid-template-rows: 320px auto;

  overflow: hidden;
  .info {
    padding: 5rem 2rem;
    text-align: center;
    background-color: var(--light-pink);
    background-image: url(${Bg});
    background-position: left;
    background-repeat: no-repeat;
    h1 {
      color: var(--peach);
      text-transform: capitalize;
    }
  }
  .adress,
  .contact {
    margin-top: 2rem;
  }
  span {
    font-weight: bold;
  }

  @media screen and (min-width: 700px) {
    grid-template-rows: repeat(2, 326px);
    grid-gap: 2rem;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto 8rem;

    .info,
    .leaflet-container {
      border-radius: var(--radius);
    }
    .info {
      padding: 5rem 4rem;
      text-align: left;
      .container {
        display: flex;

        .adress,
        .contact {
          width: 50%;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-rows: initial;
    grid-template-columns: ${props => (props.reverse ? "1fr 2fr" : "2fr 1fr")};
    margin-bottom: 2rem;

    .leaflet-container {
      grid-column: ${props => (props.reverse ? "1 / 2" : "2 / 3")};
      grid-row: 1 / 2;
    }
  }
`

export default MapCell
