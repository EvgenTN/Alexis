import React from 'react';

export default (props) => {
    console.log(props);
    const {
        image,
        title,
        main,
        date,
    } = props.activeArticle;

    return (
        <div className='activeArcticle'>

            <div className='activeArcticle__image'>
                <img src={image} alt='back' />
            </div>
            <div className='activeArcticle_article'>
                <p className='title'>{title}{date}</p>
                <p className='text'>{main}</p>
            </div>

        </div>
    )
}