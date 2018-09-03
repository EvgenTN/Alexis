import React from 'react';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  link,
} from '../../assets/images';
export default (props) => {
  // console.log(props);
  const {
    linkFB,
    linkInstagram,
    linkLinkedIn,
    linkTwitter,
    text,
    title
  } = props.itemInfo
  return (
    <div className='teamTabInfo'>
      <p className='teamTabInfo__title'>{title}</p>
      <div className='teamTabInfo__container'>
        <p className='teamTabInfo__text'>{text}</p>
        <div className='teamTabInfo__icon'>
          <img src={link} alt='link' />
        </div>
        <div className='teamTabInfo__link'>
          <a
            href={linkFB} >
            <img
              src={Facebook}
              alt='FB' />
            <p>Facebook</p>
          </a>
          <a
            href={linkTwitter} >
            <img
              src={Twitter}
              alt='Twitter' />
            <p>Twitter</p>
          </a>
          <a
            href={linkLinkedIn} >
            <img
              src={LinkedIn}
              alt='LinkedIn' />
            <p>LinkedIn</p>
          </a>
          <a
            href={linkInstagram} >
            <img
              src={Instagram}
              alt='Instagram' />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  )
}