import React from 'react';
import {
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
} from '../../assets/images';

const img = [
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
];


export default () => {
  return (
    <section className='portfolio sectionNumber'>
      <div className='wrapper'>
        <p className='portfolio__title title'>Portfolio.</p>
        <p className='portfolio__subtext subtitle'>
          We understand your requirement and provide quality works.
        </p>
        <div className='container-fluid'>
          <div className='row'>
            {
              img.map((item, id) => {
                return (
                  <div className='col-4 portfolio__image'>
                    <img
                      key={id}
                      alt={item}
                      src={item}
                    />
                  </div>
                )
              }
              )
            }
          </div>

        </div>
      </div>
    </section>
  )
}
