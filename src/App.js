import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Button } from "reactstrap";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => {
  return <Router>
     <ReduxProvider store={reduxStore}>
          <div
              className="containe\r d-flex align-items-center flex-column pages"
              id="pathreg"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Route exact path="/" component={RegistrationForm}></Route>
            </div>
            

            <div
              className="containe\r d-flex align-items-center flex-column pages"
              id="pathlog"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Route exact path="/login" component={LoginForm}></Route>
            </div>
            </ReduxProvider>
  </Router>}

export default App;
