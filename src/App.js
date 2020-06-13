import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => {
  return (
    <Router>
      <ReduxProvider store={reduxStore}>
        <Switch>       
          <Route exact path="/" component={RegistrationForm}/>
          <Route exact path="/login" component={LoginForm}/>
        </Switch> 
      </ReduxProvider>
    </Router>
  )
}

export default App;
