import React from 'react';


export default (props) => {
  return (
    <div className='contactForm'>
    <form className='contactForm__form'>
      <input className='contactForm__input' type='text' placeholder='Your Name' />
      <input className='contactForm__input' type='email' placeholder='Your Email' />
      <input className='contactForm__input' type='text' placeholder='Subject' />
      <input className='contactForm__input' type='text' placeholder='Project Budget' />
      <input className='contactForm__textarea' type='textarea' placeholder='Your Message' />
      <button className='button red' type='submit'>send message</button>
    </form>
    </div>
  )
}