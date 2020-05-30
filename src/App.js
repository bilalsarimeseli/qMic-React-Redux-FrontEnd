import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">Register</span>
      </div>
    </nav>
  );
}

// export default Header;


