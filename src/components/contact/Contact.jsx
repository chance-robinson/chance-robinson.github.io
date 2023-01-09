import './contact.css'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import Modal from 'react-modal/lib/components/Modal'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

Modal.setAppElement('#root')
const Contact = () => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t2v5eer', 'template_s0hfebi', form.current, 'Xnn0lmwerbeCV-wSm')
    emailjs.sendForm('service_t2v5eer', 'template_y3wekuc', form.current, 'Xnn0lmwerbeCV-wSm')
      .then((result) => {
          e.target.reset();
          submitSuccess();
      }, (error) => {
          submitError();
      });
  };
  
  const submitSuccess = event => {
    setModalSuccess(true);
  }

  const submitError = event => {
    setModalError(true);
  }

  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact Me</h2>
      <Modal isOpen={modalSuccess} onRequestClose={() => setModalSuccess(false)} className="Modal" overlayClassName="Modal__Overlay">
        <p>Your form was submitted</p>
        <button className='btn btn-primary' onClick={() => setModalSuccess(false)}>Close</button>
      </Modal>
      <Modal isOpen={modalError} onRequestClose={() => setModalError(false)} className="Modal" overlayClassName="Modal__Overlay">
        <p>Form not submitted, try again.</p>
        <button className='btn btn-primary' onClick={() => setModalError(false)}>Close</button>
      </Modal>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icons'></AiOutlineMail>
            <h4>Email</h4>
            <h5>brighamyoung2@gmail.com</h5>
            <a href="mailto:brighamyoung2@gmail.com" target='_blank' rel='noopener noreferrer'>
              Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" id='name' name='from_name' placeholder='Full Name' required/>
          <input id='email' name='from_email' placeholder='Email' required/>
          <textarea id='message' name="from_message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact