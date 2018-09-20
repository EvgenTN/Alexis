import React from 'react';

export default (props) => {
  console.log('itemArticle_props', props)
  const {
    blog,
  } = props;
  return (
    <div className='itemArticle'>
      {blog && blog.map((item, id) => {
        return (
          <div className='itemArticle__article'
            key={id}
            onClick = {() => props.changeActiveArticle(id)}
          >
            <div className={item.color}>{item.author}</div>
            <div>{item.date}</div>
            <div>{item.title}</div>
            <div>{item.image}</div>
          </div>
        )
      })}
    </div>
  )
}