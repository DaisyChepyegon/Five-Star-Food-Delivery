import React, { useState } from "react";

function SignUp({ setCustomer }) {
  const [first_name, setFirst_name] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        second_name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          autoComplete="off"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <label htmlFor="second_name">Second Name</label>
        <input
          type="text"
          id="second_name"
          autoComplete="off"
          value={first_name}
          onChange={(e) => setSecond_name(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
