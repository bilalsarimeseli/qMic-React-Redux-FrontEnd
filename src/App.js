import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from 'reactstrap';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
    <Router>
      <div className="App">
        <Header/>
        <div className="containe\r d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </ReduxProvider>
  );
}




function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h2">Register</span>
      </div>
    </nav>
  );
}

export default App;
// export default Header;


