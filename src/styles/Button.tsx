import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface ButtonProps {
  color?: "light"
}

export const Button = styled(Link)<ButtonProps>`
  padding: 1.0625rem 1.1875rem;
  display: inline-block;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  text-transform: uppercase;
  z-index: 10;
  color: ${props => (props.color ? "var(--dark-grey)" : "var(--white)")};
  background: ${props => (props.color ? "var(--white)" : "var(--peach)")};
  :hover {
    color: var(--white);
    background: var(--light-peach);
  }
`

export const Anchor = styled(AnchorLink)`
  padding: 1.0625rem 1.1875rem;
  display: inline-block;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  text-transform: uppercase;
  z-index: 10;
  color: var(--white);
  background: var(--peach);
  :hover {
    color: var(--white);
    background: var(--light-peach);
  }
`
