import React from "react";


export default (props) => {

  return (
    <div className="subscribe wrapper">
      <p className="subscribe__title">Subscribe to Newsletter</p>
      <form
        className="subscribe__form"
      // onSubmit={(e) => addSubscribe(e)}
      >
        <input type="email"
          placeholder="Enter your email"
        />
        <button
          className="button red"
          type="submit"
        >Subscribe now</button>
      </form>
    </div>
  )
}