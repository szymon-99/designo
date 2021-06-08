import styled from "styled-components"

export const Illustrations = styled.section`
  display: grid;
  grid-row-gap: 80px;
  .img {
    display: block;
    position: relative;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  article {
    display: grid;
    justify-items: center;
    text-align: center;
    h3 {
      text-transform: uppercase;
      margin: 3rem 0 2rem;
    }
  }

  @media screen and (min-width: 700px) {
    grid-row-gap: 2rem;

    article {
      grid-template-columns: auto 1fr;
      grid-column-gap: 3rem;
      text-align: left;
    }
  }

  @media screen and (min-width: 1100px) {
    grid-column-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    article {
      grid: initial;
      text-align: center;
    }
  }
`
