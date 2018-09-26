import React from "react";


export default (props) => {

  return (
    <div className="subscribe wrapper">
      <p className="subscribe__title">Subscribe to Newsletter</p>
      <form
        className="subscribe__form"
        onSubmit={(e) => props.addSubscribe(e)}
      >
        <input type="email"
          placeholder="Enter your email"
          onChange={(e) => console.log('console_onChange', e.target.value)}
        />
        <button type="submit">Subscribe now</button>
      </form>
    </div>

  )
}
{/*     <form className="wrapper">
      <div class="input-group mb-3">
        <input type="email"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </form> */ }


