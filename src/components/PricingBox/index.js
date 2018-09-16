import React from 'react';

export default (props) => {

  console.log(props);
  const {
    color,
    info,
    title,
    price,
  } = props.price
  const infoKeys = Object.keys(info);
  console.log(infoKeys)
  return (
    <div className={`box col-4`}>
      <div className={`box__wrapper ${color}`}>
        <p className="box__title">{title}</p>
        <div className="box__price">
          <p>${price}</p>
          <p>Per Month</p>
        </div>
        <div className="box__info">
          {
            info && infoKeys.map((item, id) => {
              return (
                <div
                  key={id}
                >
                  <p>
                    <span className="box__boldText">{info[item]}</span> {item}
                  </p>
                </div>
              )
            })
          }
        </div>
        <button className={`button ${color}`}>get started</button>
      </div>


    </div>
  )
}