import React from 'react'
import { Formik, Field} from 'formik'
import { Section } from '@components/global';
import {ContactButton, validationSchema, StyledContainer, Art} from './style'


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

