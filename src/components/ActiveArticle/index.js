import React from 'react';

export default (props) => {
    const{
        image,
        title,
        text,
    }=props.activeArticle;

    return(
        <div className='activeArcticle'>
        <div className='activeArcticle__image'>
        <img src={image} alt = 'back'/>
        </div>
        <div className='activeArcticle_article'>
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
           
        </div>

        </div>
    )
}