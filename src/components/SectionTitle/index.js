import React from 'react';

export default (props) => {
  // console.log(props);
  const {
    number,
    subText,
    title,
  } = props.section;
  const theme = props.theme ? ` ${props.theme}` : '';
  return (
    <div className='sectionTitle'>
      <p className={`sectionNumber${theme}`}>{number}</p>
      <p className={`title${theme}`}>{title}</p>
      <p className={`subtitle${theme}`}>{subText}</p>
    </div>
  )
}