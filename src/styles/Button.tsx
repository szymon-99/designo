import styled from "styled-components"
interface ButtonProps {
  color?: "light"
}

export const Button = styled.button<ButtonProps>`
  padding: 1.125rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  text-transform: uppercase;
  color: ${props => (props.color ? "var(--dark-grey)" : "var(--white)")};
  background: ${props => (props.color ? "var(--white)" : "(var--peach)")};
  :hover {
    color: var(--white);
    background: var(--light-peach);
  }
`
