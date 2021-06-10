import React, { FC } from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { links } from "../constants/footerLinks"

interface FooterProps {
  contactPage?: boolean
}

const Footer: FC<FooterProps> = ({ contactPage }) => {
  return (
    <Wrapper
      style={contactPage ? { padding: "4rem 0" } : undefined}
      className={contactPage ? "section" : undefined}
    >
      <NavWrapper className="section-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../assets/images/shared/logo-light.png"
              className="logo"
              alt="Designo"
              placeholder="blurred"
              layout="fixed"
              width={202}
              height={27}
            />
          </Link>
        </div>
        <NavLinks />
      </NavWrapper>
      <div className="info section-center">
        <div>
          <span>
            <p>Designo Central Office</p>
          </span>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <span>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.com</p>
          </span>
        </div>
        <div className="links">
          <div>
            {links.map(link => {
              const { id, icon, url } = link

              return (
                <a href={url} key={id} className="social-link">
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 15.625rem 0 4rem 0;
  background: var(--black);
  text-align: center;
  .info {
    margin-top: 40px;
    display: grid;
    grid-gap: 40px;
  }
  p {
    color: var(--white);
    opacity: 0.5;
  }
  span {
    font-weight: 500;
  }
  .links {
    a:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .social-link {
    font-size: 1.5rem;
    color: var(--peach);
    transition: var(--transition);
  }
  .social-link:hover {
    color: var(--light-peach);
  }

  @media screen and (min-width: 700px) {
    padding-top: calc(10.375rem - 40px);
    .info {
      margin-top: 30px;
      grid-template-columns: repeat(3, 1fr);
      text-align: start;
    }
    .links {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
  @media screen and (min-width: 992px) {
    padding-top: 9rem;
  }
`

const NavWrapper = styled.nav`
  .nav-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ffffff19;
  }

  .nav-links {
    margin-top: 2rem;
    display: grid;
    grid-gap: 2rem;
    text-align: center;

    a {
      text-transform: uppercase;
      font-size: 0.875rem;
      letter-spacing: 2px;
      font-weight: 400;
      letter-spacing: 2px;
      color: var(--white);
    }
    a {
      border-bottom: 1px solid transparent;
    }
    a:hover {
      border-bottom: 1px solid var(--dark-grey);
    }
  }

  @media screen and (min-width: 700px) {
    padding: 40px 0;
    border-bottom: 1px solid var(--dark-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-header {
      padding: 0 0;
      border: none;
    }
    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      margin-top: 0;
      grid-gap: 0;

      li {
        margin-right: 42px;
      }
      li:last-of-type {
        margin-right: 0;
      }
    }
  }
`

export default Footer
