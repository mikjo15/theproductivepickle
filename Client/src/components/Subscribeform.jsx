import React, { useState } from "react";

function Subscribeform() {
  const [subscriber, setSubscriber] = useState({
    name: "",
    email: ""
  })

  const [subStatus, setSubStatus] = useState("SUBSCRIBE");

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
      fetch(`/api/memberAdd?email=${subscriber.email}&name=${subscriber.name}`)
      .then(res => res.json())
      .then(json => {
        if (json.status === "subscribed") {
          setSubStatus("Thank you! You have now been subscribed");
        } else if (json.title === "Member Exists") {
          setSubStatus("You're already a member. Great!");
        } else {
          setSubStatus("Sorry, something went wrong. Try again.");
        }
      })
      .catch(err => console.log("error", err))

      setSubscriber({
        name: "",
        email: ""
      });
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
      <button type="submit" className="btn btn-lg btn-block btn-outline-light">{subStatus}</button>
    </form>
  )
}

export default Subscribeform;
