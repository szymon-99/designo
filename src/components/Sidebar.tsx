import React, { FC } from "react"
import { navLinks } from "../constants/navLinks"
import { Link } from "gatsby"
import styled from "styled-components"

// interface SidebarProps {
//   callback: React.Dispatch<React.SetStateAction<boolean>>
// }

const Sidebar: FC = () => {
  // const listRef = useRef<HTMLUListElement>(null)

  // console.log(listRef.current)
  // const handleClick = (e: any) => {
  //   if (listRef.current && listRef.current.contains(e.target)) {

  //   } else {
  //     callback(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener("click", handleClick)
  //   return () => document.removeEventListener("click", handleClick)
  // }, [listRef])

  return (
    <Wrapper>
      {navLinks.map(link => {
        const { label, url, id } = link
        return (
          <li key={id}>
            <Link to={url}>{label}</Link>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--black);
  transform: translateY(100%);
  padding: 3rem 1.5rem;
  z-index: 10;
  a {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.525rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: var(--white);
  }
  li:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

export default Sidebar
