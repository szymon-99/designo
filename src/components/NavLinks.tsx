import React, { FC } from "react"
import { navLinks } from "../constants/navLinks"
import { Link } from "gatsby"

const NavLinks: FC = () => {
  return (
    <ul className="nav-links">
      {navLinks.map(link => {
        const { label, url, id } = link
        return (
          <li key={id}>
            <Link to={url}>{label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
