import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 :root {
--peach : #E7816B;
--light-peach:#FFAD9B;
--black:#1D1C1E;
--dark-grey: #333136;
--white:#FFFFFF;
--light-grey:#F1F3F5;
--max-width: 1111px;
 }
*, 
::after, 
::before{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Jost', sans-serif;
}
h1{
    font-size:2rem;
    line-height: 2.25rem;
  }
h2{
 font-size:1.75rem;
 line-height: 2.25rem;
}

h3{
font-size: 1.25rem;
line-height: 1.625rem;
letter-spacing: 5px;
}
p{
font-size:1rem;
line-height: 1.625px;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  max-width: 100%;
}
@media screen and (min-width:800px){
  h1{
font-size: 3rem;
}
h2{
font-size:2.5rem;
letter-spacing: 2px;
line-height: 3rem;
}
}

/* ========
global classes
===========*/
.section-center{
  margin: 0 auto;
  width: 95vw;
  max-width: var(--max-width);
}

@media screen and (min-width:800){
  .section-center{
    width:90vw;
  }
}
 `

export default GlobalStyle
