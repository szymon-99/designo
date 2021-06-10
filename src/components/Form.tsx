import React, { FC } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { MdError } from "react-icons/md"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Can't be empty"),
        email: Yup.string()
          .email("Invalid email adress")
          .required("Can't be empty"),
        phone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
        message: Yup.string().required("Can't be empty"),
      })}
      onSubmit={values => console.log(values)}
    >
      <StyledForm>
        <div>
          <label htmlFor="name">
            Name {<ErrorMessage component={Error} name="name" />}
          </label>
          <Field name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            Email Adress {<ErrorMessage component={Error} name="email" />}
          </label>
          <Field name="email" type="email" />
        </div>
        <div>
          <label htmlFor="phone">
            Phone (optional){<ErrorMessage component={Error} name="phone" />}
          </label>
          <Field name="phone" type="text" />
        </div>
        <div>
          <label htmlFor="message">
            Your Message{<ErrorMessage component={Error} name="message" />}
          </label>
          <Field as="textarea" name="message" />
        </div>

        <button type="submit">submit</button>
      </StyledForm>
    </Formik>
  )
}

const Error: FC = ({ children }) => {
  return (
    <div>
      {children} <MdError />
    </div>
  )
}

const StyledForm = styled(Form)`
  margin-top: 3rem;

  label {
    margin: 1rem 0 0 1rem;
    padding: 0.5rem 0;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    text-align: left;
    div {
      display: flex;
      font-size: 0.75rem;
      text-decoration: italic;
      align-items: center;
      letter-spacing: 1px;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  input,
  textarea {
    resize: none;
    display: block;
    padding: 0 1rem;
    outline: none;
    width: 100%;
    border: none;
    background-color: transparent;
    color: var(--light-grey);
    position: relative;
    border-bottom: 1px solid var(--white);
    transition: var(--transition);
    font-size: 1rem;
    :focus {
      padding-top: 0.5rem;
      border-bottom: 3px solid var(--white);
    }
  }
  div:focus-within {
    label {
      opacity: 1;
    }
  }
  button {
    margin-top: 3rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--white);
    color: var(--dark-grey);
    transition: var(--transition);
    :hover {
      background-color: var(--light-peach);
      color: var(--white);
    }
  }
  input:-webkit-autofill {
    /* -webkit-box-shadow: 0 0 0px 1000px white inset; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--white);
  }

  input:-webkit-autofill:focus {
    /* -webkit-box-shadow: 0 0 0 3px, 0 0 0 50px white inset;
    -webkit-text-fill-color: #333; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--white);
  }

  @media screen and (min-width: 700px) {
    text-align: right;
    button {
      margin-top: 1.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    margin: 0;
  }
`
export default ContactForm
