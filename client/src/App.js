import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Welcome from "./Welcome";

function App() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }, []);

  return (
    <>
      <NavBar customer={customer} setCustomer={setCustomer} />
      <main>
        {customer ? (
          <Switch>
            <Route path="/">
              <Welcome customer={customer}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setCustomer={setCustomer} />
            </Route>
            <Route path="/login">
              <Login setCustomer={setCustomer} />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;

