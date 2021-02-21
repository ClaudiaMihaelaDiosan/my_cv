import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import Contact from '@images/contact/contact.png'


export default () => (
  <Section id="contact" accent>
    <StyledContainer>
    <div>
      <h1>Contact</h1>
        <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    })}
    onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
				alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form  name="contact" method="POST" data-netlify="true">
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        {values.success && (
          <InputField>
            <Center>
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
            </Center>
          </InputField>
        )}
        <Center>
          <ContactButton secondary type="submit" disabled={isSubmitting}>
            Send
          </ContactButton>
        </Center>
      </Form>
    )}
  </Formik>
  </div>
  <Art>
  <img src={Contact} alt="Contact image" />
  </Art>
  </StyledContainer>
</Section>

);



const Input = styled.input`
  display: flex;
  width: 180%;
  box-sizing: border-box;
  border: 2px solid #6c63ff;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  ${({ error }) =>
    error &&
    `
		border-color: #BE1818;
	`}
  &::placeholder {
    color: #a7a7a7;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

 const Error = styled.span`
  color: #BE1818;
`;

 const Center = styled.div`
  text-align: left;
  h4 {
    font-weight: normal;
  }
`;

 const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  color: #000000 ;
`;

const ContactButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;



const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: 20%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;