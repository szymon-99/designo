import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 :root {
--peach : #E7816B;
--light-peach:#FFAD9B;
--black:#1D1C1E;
--dark-grey: #333136;
--white:#FFFFFF;
--light-grey:#F1F3F5;
--light-pink:#FDF3F0;
--max-width: 1111px;
--transition: all .3s ease;
--radius: 15px;
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
line-height: 1.625rem;
}
h1,
h2,
h3,
h4,
p{
  font-weight: 400;
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
@media screen and (min-width:700px){
  h1{
font-size: 3rem;
line-height: 3rem;
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
  width: 90vw;
  max-width: var(--max-width);
}
.section{
  margin-top: 7rem;
}
.text{
    padding: 5rem 0;
    max-width: 90vw;
    margin: 0 auto;
    text-align: center;
    h1 {
      margin-bottom: 1.5rem;
    }
}

@media screen and (min-width:700px){
  .text {
      padding: 4rem 3.5rem;
    }
}

@media screen and (min-width:1100px){
  .section{
    margin-top: 10rem;
  }
  
    .text {
      text-align: left;
      padding: 0 5rem;
    }
}
 `

export default GlobalStyle
