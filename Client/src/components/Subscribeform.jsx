import React, { useState } from "react";

function Subscribeform() {
  const [subscriber, setSubscriber] = useState({
    name: "",
    email: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setSubscriber(prevSubscriber => {
      return {
        ...prevSubscriber,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (subscriber.name && subscriber.email) {
      fetch(`/api/memberAdd?email=${subscriber.email}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={subscriber.name}
          className="form-control"
          placeholder="First name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={subscriber.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <button type="submit" className="btn btn-lg btn-block btn-outline-light">SUBSCRIBE</button>
    </form>
  )
}

export default Subscribeform;
