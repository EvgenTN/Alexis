import React from "react";


export default (props) => {

  const {
    email,
    changeMail,
    addSubscribe,
  } =props;

  return (
    <div className="subscribe wrapper">
      <p className="subscribe__title">Subscribe to Newsletter</p>
      <form
        className="subscribe__form"
        onSubmit={(e) => addSubscribe(email, e)}
        id='subscribe'
      >
        <input type="email"
          placeholder="Enter your email"
          onChange={(e) => changeMail(e)}
          name='email'
          form='subscribe'
          value={email}
        />
        <button
          className="button red"
          type="submit"
        >Subscribe now</button>
      </form>
    </div>
  )
}