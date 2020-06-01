import React from "react";
import "./components/Header/Header"
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
      <div className="App" style={{  
  backgroundImage: "url(" + "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
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
    <nav className="navbar bg-dark" id="navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h2" style={{color: "pink"}}>Register</span>
      </div>
    </nav>
  );
}

export default App;
// export default Header;


