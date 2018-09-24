import React from "react";
// import * as img from "../../assets/images";


export default (props) => {
  // console.log(props);

  const {
    whySelectUs,
    img,
  } = props;
console.log (props);
  return (
    <div className="boxes">
      <div className="row">
        {
          whySelectUs && whySelectUs.map((item, id) => {
            // console.log(item.icon);
            return (
              <div
                key={id}
                className="box col-4"
              >
                <div className="row">
                  <div className="box__icon col-4">
                    <img src={img.icon_app} alt="icon" />
                  </div>
                  <p className="box__title col-7">{item.title}</p>
                </div>

                <p className="box__text">{item.text}</p>
              </div >
            )
          })
        }
      </div>

    </div>

  )
}