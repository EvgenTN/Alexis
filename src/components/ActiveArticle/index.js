import React from 'react';

export default (props) => {
  // console.log(props);
  const {
    image,
    title,
    main,
    date,
    author,
    color,
  } = props.activeArticle;

  return (
    <div className={`activeArcticle ${color}`}>
      <div className='activeArcticle__image'>
        <img src={image} alt='back' />
        <div className="activeArcticle__authorBox">
          <p className={`activeArcticle__author ${color}`}>{author}</p>
          <p className="activeArcticle__date">{date}</p>
        </div>
      </div>
      <div className='activeArcticle__article'>
        <p className='activeArcticle__title'>{title}</p>
        <p className={`activeArcticle__text`}>
          {main}<a href="#" className={`activeArcticle__more ${color}`}> Read Full Article »</a>
        </p>
      </div>

    </div>
  )
}