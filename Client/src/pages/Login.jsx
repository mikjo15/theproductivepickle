import React, {useState} from "react";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    const { value, name } = e.target;

    setLogin(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // TODO: Fix handleChange
  // TODO: Make it change page, when submitted

  return (
    <div className="text-center w-25 mx-auto m-5">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label>Username</label>
        <input onChange={handleChange} type="username" className="form-control mb-3" placeholder="Username" value={login.username} required autofocus />
        <label for="inputPassword">Password</label>
        <input onChange={handleChange} type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" value={login.password} required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
      )
    }

      export default Login;
