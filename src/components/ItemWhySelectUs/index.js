import React from "react";

export default (props) => {
  console.log(props);

  const {

    whySelectUs,
    images,
  } = props;

  return (
    <div className="boxes container-fluid">
      <div className="row">
        {
          whySelectUs && whySelectUs.map((item, id) => {
            console.log(item.icon);
            return (
              <div
                key={id}
                className="box col-4 row"
              >
                <div className="box__icon col-4">
                  <img src="" alt="icon" />
                </div>
                <p className="box__title col-7">{item.title}</p>
                <p className="box__text col-12">{item.text}</p>
              </div >
            )
          })
        }
      </div>

    </div>

  )
}