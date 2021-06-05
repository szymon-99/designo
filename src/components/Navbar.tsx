import React, { FC } from "react"
import styled from "styled-components"
import Burger from "../assets/svgs/shared/icon-hamburger.svg"
import Close from "../assets/svgs/shared/icon-close.svg"
import { Link } from "gatsby"
import NavLinks from "./NavLinks"
import { StaticImage } from "gatsby-plugin-image"

const Navbar: FC = () => {
  const isOpen = false
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../assets/images/shared/logo-dark.png"
              className="logo"
              alt="Designo"
              placeholder="blurred"
              layout="fixed"
              width={196}
              height={24}
            />
          </Link>

          <div className="nav-toggle">{isOpen ? <Close /> : <Burger />}</div>
        </div>

        <NavLinks />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 3rem 2rem;

  .nav-center {
    height: 24px;
  }

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

  @media screen and (min-width: 800px) {
    padding: 3rem 0;

    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90vw;
      max-width: 1111px;
      margin: 0 auto;
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

// interface NavbarProps {
//   type: "nav" | "footer"
// }

// const Navbar: FC<NavbarProps> = ({ type }) => {
//   const isOpen = false
//   return (
//     <Wrapper>
//       <div className="nav-center">
//         <div className="nav-header">
//           <Link to="/">
//             <StaticImage
//               src="../assets/images/shared/logo-dark.png"
//               className="logo"
//               alt="Designo"
//               placeholder="blurred"
//               layout="fixed"
//               width={196}
//               height={24}
//             />
//           </Link>
//           {type === "nav" && (
//             <div className="nav-toggle">{isOpen ? <Close /> : <Burger />}</div>
//           )}
//         </div>

//         <NavLinks />
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.nav`
//   padding: 3rem 2rem;

//   .nav-center {
//     height: 24px;
//   }

//   .nav-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 100%;

//     .nav-toggle {
//       cursor: pointer;
//     }
//   }
//   .nav-links {
//     display: none;
//   }

//   @media screen and (min-width: 800px) {
//     padding: 3rem 0;

//     .nav-toggle {
//       display: none;
//     }
//     .nav-center {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: 90vw;
//       max-width: 1111px;
//       margin: 0 auto;
//     }
//     .nav-links {
//       display: flex;

//       li {
//         margin-right: 42px;
//       }
//       li:last-of-type {
//         margin-right: 0;
//       }
//       a {
//         text-transform: uppercase;
//         font-size: 0.875rem;
//         letter-spacing: 2px;
//         font-weight: 400;
//         letter-spacing: 2px;
//         color: var(--dark-grey);
//       }
//     }
//   }
// `

// export default Navbar
