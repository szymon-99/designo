import React, { FC } from "react"
import styled from "styled-components"
import { HomeData } from "../pages/index"

interface ServicesProps {
  services: HomeData[]
}

const Services: FC<ServicesProps> = ({ services }) => {
  return <Wrapper className="section-center">Services</Wrapper>
}

const Wrapper = styled.section``

export default Services
