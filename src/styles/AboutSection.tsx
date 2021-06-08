import styled from "styled-components"

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 375px auto;
  overflow: hidden;
  color: var(--dark-grey);
  background-color: var(--light-pink);
  article {
    position: relative;
    overflow: hidden;
  }

  p:last-of-type {
    margin-top: 2rem;
  }
  @media screen and (min-width: 700px) {
    margin: 7rem auto 0;
    width: 90vw;
    border-radius: var(--radius);
    max-width: 1111px;
    grid-template-rows: 320px auto;
  }
  @media screen and (min-width: 992px) {
    margin-top: 10rem;
    grid-template-columns: 470px 1fr;
    grid-template-rows: 640px;

    article {
      display: flex;
      align-items: center;
    }
  }
`
export default Wrapper
