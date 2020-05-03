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

  return (
    <form action="/" method="POST">
      <div class="form-group">
        <label for="name">First name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={subscriber.name}
          class="form-control"
          placeholder="First name"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={subscriber.email}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <button type="submit" class="btn btn-lg btn-block btn-outline-light">SUBSCRIBE</button>
    </form>
  )
}

export default Subscribeform;
