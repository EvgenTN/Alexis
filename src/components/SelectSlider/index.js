import React from 'react';

export default (props) => {
  // console.log('props');
  const {
    icon,
    image,
    name,
    post,
    text,
  } = props.item;
  return (
    <div className='slider'>
      <div className='slider__image'>
        <img src={image} alt='' />
      </div>
      <div className='slider__container'>
        <p className='slider__text'>{text}</p>
        <img className='slider__icon' src={icon} alt='' />
        <p className='slider__name'>{name}</p>
        <p className='slider__post'>{post}</p>
      </div>
      {
        props.testimonials &&
        <div className='slider__circles'>
          {props.testimonials.map((item, id) => {
            const active = id === props.activeSlide ? ' active' : '';
            return (
              <div
                className={`slider__circle ${active}`}
                key={id}
                onClick= {() => props.changeSlide(id)}
              ></div>
            )
          })}
        </div>
      }
    </div>
  )
}