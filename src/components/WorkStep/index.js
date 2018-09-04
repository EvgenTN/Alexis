import React from 'react';

export default (props) => {
  // console.log(props);
  const side = props.sideLeft ? 'left' : 'right';
  const {
    color,
    image,
    number,
    title,
    text,
  } = props.step
  return (
    <div className='workStep'>
      <div className='workStep__image'>
        <img src={image} alt = 'back'/>
      </div>
      <div className={`box ${color} ${side}`}>
        <p className='box__number'>{number}</p>
        <div className='box__info'>
          <p className='box__title'>{title}</p>
          <p className='box__text'>{text}</p>
        </div>
      </div>
    </div>
  )
}