import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Login({ setCustomer }) {
  const navigate = useNavigate()
  const [first_name, setFirst_name] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
        navigate("/home")
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          autoComplete="off"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <NavLink to="/signup">Don't have an Account? SignUp</NavLink>
    </div>
  );
}

export default Login;