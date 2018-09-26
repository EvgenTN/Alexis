import React from 'react';


export default (props) => {
  return (
    <div className='contact'>
    <form className='contact__form'>
      <input className='contact__input' type='text' placeholder='Your Name' />
      <input className='contact__input' type='email' placeholder='Your Email' />
      <input className='contact__input' type='text' placeholder='Subject' />
      <input className='contact__input' type='text' placeholder='Project Budget' />
      <input className='contact__textarea' type='textarea' placeholder='Your Message' />
      <button className='button red' type='submit'>send message</button>
    </form>
    </div>
  )
}