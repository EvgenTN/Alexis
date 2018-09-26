import React from 'react';

export default (props) => {
  // console.log('itemArticle_props', props.blog)
  const {
    blog,
    activeArticle,
    changeActiveArticle
  } = props;
  return (
    <div className='itemArticle'>
      {
        blog && blog.map((item, id) => {
          const {
            date,
            title,
            main,
            color,
            author
          } = item;
          return id !== activeArticle && (
            <div className={`itemArticle__article ${color}`}
              key={id}
              onClick={() => changeActiveArticle(id)}
            >
              <div className="itemArticle__authorBox">
                <p className={`itemArticle__author ${color}`}>{author}</p>
                <p className="itemArticle__date">{date}</p>
              </div>
              <p className='itemArticle__title'>{title}</p>
              <p className={`itemArticle__text`}>
                {main}<a href="#" className={`activeArcticle__more ${color}`}> Read Full Article »</a>
              </p>
            </div>
          )
        })}
    </div>
  )
}