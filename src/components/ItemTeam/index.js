import React from 'react';

export default (props) => {
  // console.log(props);
  const {
    name,
    color,
    image,
    post,
  } = props.itemTeam;
  const {
    chooseTeamMember,
    id,
  } = props;
  return (
    <a
      className={`itemTeam col-3 ${color}`}
      onClick={() => chooseTeamMember(id)}
    >
      <div className='itemTeam__image'>
        <img src={image} alt='Photo' />
      </div>
      <div className={`itemTeam__footer ${color}`}>
        <p className='itemTeam__name'>{name}</p>
        <p className='itemTeam__post'>{post}</p>
      </div>
    </a>
  )
}