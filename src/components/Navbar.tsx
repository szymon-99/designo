import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import Burger from "../assets/svgs/icons/icon-hamburger.svg"
import Close from "../assets/svgs/icons/icon-close.svg"
import { Link } from "gatsby"
import NavLinks from "./NavLinks"
import { StaticImage } from "gatsby-plugin-image"
import Sidebar from "./Sidebar"

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 700) setIsOpen(false)
    })
  }, [])
  return (
    <Wrapper>
      <div className="nav-header">
        <Link to="/">
          <StaticImage
            src="../assets/images/shared/logo-dark.png"
            className="logo"
            alt="Designo"
            placeholder="blurred"
            layout="fixed"
            width={202}
            height={27}
          />
        </Link>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Burger />}
        </div>
      </div>
      <NavLinks />
      {isOpen && <Sidebar />}
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  padding: 3rem 2rem;
  position: relative;

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .nav-toggle {
      cursor: pointer;
    }
  }
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 700px) {
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    max-width: 1111px;
    margin: 0 auto;
    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;

      li {
        margin-right: 42px;
      }
      li:last-of-type {
        margin-right: 0;
      }
      a {
        text-transform: uppercase;
        font-size: 0.875rem;
        letter-spacing: 2px;
        font-weight: 400;
        letter-spacing: 2px;
        color: var(--dark-grey);
      }
    }
  }
`

export default Navbar
