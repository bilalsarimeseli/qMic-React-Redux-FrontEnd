import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL } from "../../constants/apiConstant";
import { withStyles } from "@material-ui/core";
import ACTIONS from "../../modules/action";
import Button from 'react-bootstrap/Button';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

// class RegistrationForm extends Component {
//   state = {};
//   generate = () => {
//     return this.props.items.map((item) => (
//       <ListItem key={item.id}>
//         <ListItemText primary={item.description} />
//         <ListItemSecondaryAction>
//           <IconButton
//             aria-label="Delete"
//             onClick={this.handleDelete}
//             value={item.id}
//           >
//             <DeleteIcon />
//           </IconButton>
//         </ListItemSecondaryAction>
//       </ListItem>
//     ));
//   };
// }

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  register: (item) => dispatch(ACTIONS.register(item)),
  login: (id) => dispatch(ACTIONS.login(id)),
  createMeeting: (item) => dispatch(ACTIONS.createMeeting(item)),
  endMeeting: (item) => dispatch(ACTIONS.endMeeting(item)),
  handRaise: (item) => dispatch(ACTIONS.handRaise(item)),
  checkRaise: (item) => dispatch(ACTIONS.checkHraise(item)),
  permitHraise: (item) => dispatch(ACTIONS.permitHraise(item)),
  nullifyHraisepermit: (item) => dispatch(ACTIONS.nullifyhraisepermit(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RegistrationForm));

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios
        .post(API_BASE_URL + "register", payload)
        .then(function (response) {
          if (response.data.code === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            redirectToHome();
            props.showError(null);
          } else {
            props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToLogin = () => {
    props.updateTitle("Login");
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Enter your email address to register please.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="registerbtn"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
        <div className="buttondiv"><Button variant="link" id="login">Login here</Button></div>
        </span>
      </div>
    </div>
  );
}

// export default withRouter(RegistrationForm);
