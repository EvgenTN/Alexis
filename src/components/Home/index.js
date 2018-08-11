import React from 'react';
import {
  money,
  watch,
  check,
  
} from '../../assets/images'

export default (props) => {
  const box = [
    {
      icon: money,
      title: 'Fixed price projects',
      color: 'green'
    },
    {
      icon: watch,
      title: 'Receive on time',
      color: 'purpure',

    },
    {
      icon: check,
      title: 'Satisfaction guranteed',
      color: 'yellow',

    },
  ]
  return (
    <div className='home'>
      <div className='wrapper darkBack'>
        <div className='title'>We design things with love and passion.</div>
        <button className='button orange'>
          Our Works
        </button>

        {
          box &&
          <div className='boxes container'>
            <div className='row'>
              {
                box.map((item, id) => {
                  return (
                    <div className={`col-4 box ${item.color}`}>
                      <img src={item.icon} alt={item.icon} />
                      <p className='text'>{item.title}</p>
                    </div>)
                })
              }
            </div>
          </div>

        }
      </div>
    </div>
  )
}