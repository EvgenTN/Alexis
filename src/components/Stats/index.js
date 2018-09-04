import React from 'react';

export default (props) => {
  // console.log(props.stats)

  return (
    <div className='stats'>
      <div className='wrapper stats__container'>
        {props.stats && props.stats.map((item, id) => {
          const {
            color,
            image,
            title,
            value,
          } = item;

          return (
            <div
              className='box'
              key={id}
            >
              <div className='box__image'>
                <img src={image} alt='icon' />
              </div>
              <p className='box__value'>{value}</p>
              <p className='box__title'>{title}</p>
              <div className={`circle ${color}`}></div>
            </div>
          )
        })}
      </div>
    </div>

  )
}