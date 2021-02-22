import React from 'react'
import { Formik, Field} from 'formik'
import * as Yup from 'yup';
import styled from 'styled-components';
import { Section, Container } from '@components/global';


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = ({contactContent}) => {
  return (
    <Section id="contact" accent="primary">
      <StyledContainer>
      <div>
      <h1>Contact</h1>
    <Formik
      initialValues={{ name: '', email: '', message: '', success: false, }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
        fetch("/?no-cache=1", {                                
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            setSubmitting(false)
            setFieldValue('success', true);
            setTimeout(() => resetForm(), 6000);  
          })
          .catch(error => {
            console.log(error)
            alert("Error: Please Try Again!");                           
            setSubmitting(false)
          })
      }}
      render={({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (<form
        name='contact'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >

        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Full Name' name='name' id='name' />
          </div>
          {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='Email' name='email' id='email' />
          </div>
          {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
        </div>

        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='Message' name='message' id='message' rows='6' />
          </div>
          {touched.message && errors.message && <small className='has-text-danger'>{errors.message}</small>}
        </div>
        {values.success && (<h4>Your message has been successfully sent</h4>)}
        <div>
          <ContactButton secondary type="submit" disabled={isSubmitting}>Send</ContactButton>
        </div>
      </form>)}
    />
    </div>
  <Art>
  <img src={contactContent.contact_img.url} alt={contactContent.contact_img.alt} />
  </Art>
      </StyledContainer>
    </Section>
  )
}

export default ContactForm;


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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('Email is Required!'),
  message: Yup.string()
    .required('Message is Required!'),
})


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
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