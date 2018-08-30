import React from 'react';

export default (props) => {
  // console.log(props);
  const {
    number,
    subText,
    title,
  } = props.section;
  return (
    <div className='sectionTitle'>
      <p className='sectionNumber'>{number}</p>
      <p className='title'>{title}</p>
        <p className='subtitle'>{subText}</p>      
    </div>
      )
}