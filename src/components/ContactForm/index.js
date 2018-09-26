import React from 'react';


export default (props) => {
  const {
    addMessage,
    sendContact
  } = props;
  return (
    <div className='contactForm'>
      <form
        className='contactForm__form'
        onSubmit={(e) => sendContact(e)}
      >
        <input className='contactForm__input' type='text' name='name' placeholder='Your Name' onChange={(e) => props.addMessage(e)} />
        <input className='contactForm__input' type='email' name='email' placeholder='Your Email' onChange={(e) => props.addMessage(e)} />
        <input className='contactForm__input' type='text' name='subject' placeholder='Subject' onChange={(e) => props.addMessage(e)} />
        <input className='contactForm__input' type='text' name='budget' placeholder='Project Budget' onChange={(e) => props.addMessage(e)} />
        <input className='contactForm__textarea' type='textarea' name='message' placeholder='Your Message' onChange={(e) => props.addMessage(e)} />
        <button className='button red'
          type='submit'>
          send message
        </button>
      </form>
    </div>
  )
}