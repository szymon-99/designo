import React, { FC } from "react"
import { navLinks } from "../constants/navLinks"
import { Link } from "gatsby"
import styled from "styled-components"

interface SidebarProps {
  callback: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: FC<SidebarProps> = ({ callback }) => {
  return (
    <Wrapper>
      {navLinks.map(link => {
        const { label, url, id } = link
        return (
          <li key={id}>
            <Link to={url} onClick={() => callback(false)}>
              {label}
            </Link>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding: 1.5rem 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--black);
  transform: translateY(100%);
  z-index: 10;
  a {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.525rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: var(--white);
  }

  li {
    transition: var(--transition);
    padding: 1.5rem;
  }
  li:hover {
    background-color: var(--dark-grey);
  }
`

export default Sidebar
