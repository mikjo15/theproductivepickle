import React, { useState } from "react";
import Compose from "./Compose";

function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const [auth, setAuth] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    setLogin(prevValue => {
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  function handleClick(e) {
    e.preventDefault();

    if (login.username === "i need to write" && login.password === "12345") {
      setAuth(prevValue => !prevValue);
    } else {
      console.log("Try again");
      setLogin({
        username: "",
        password: ""
      })
    }
  }

  return (
    <div>
    {!auth && (
    <div className="text-center w-25 mx-auto m-5">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label>Username</label>
        <input name="username" onChange={handleChange} value={login.username} type="username" className="form-control mb-3" placeholder="Username" required />
        <label htmlFor="inputPassword">Password</label>
        <input name="password" onChange={handleChange} value={login.password} type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleClick}>Sign in</button>
      </form>
    </div> )}
    {auth && <Compose />}
    </div>
      )
    }

      export default Login;
