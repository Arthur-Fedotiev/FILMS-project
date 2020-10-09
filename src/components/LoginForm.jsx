import React, {Component} from "react";
import PropTypes from "prop-types";
import FormMessage from "./FormMessage";

const initData = {
  email: "",
  password: "",
  confirmPassword: "",
};
export default class LoginForm extends Component {
  state = {
    data: initData,
    error: {},
  };

  handleEmailChange = ({target}) => {
    const email = target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
    this.setState({data: {...this.setState.data, email: email}});
  };

  handlePasswordChange = ({target}) =>
    this.setState({data: {...this.state.data, [target.name]: target.value}});

  render() {
    const {email, password, confirmPassword, error} = this.state.data;
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui grid mb-3">
          {/* two column START */}
          <div className="column row">
            <div className="ten wide column">
              {/*  EMAIL START */}
              <div className={`field`}>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={this.handleEmailChange}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="enter email"
                />
                {error && <FormMessage type="error"></FormMessage>}
              </div>
              {/*  EMAIL END */}

              {/*  Password START */}
              <div className={`field`}>
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter password"
                />
                {error && <FormMessage type="error"></FormMessage>}
              </div>
              {/*  Password END */}

              {/*  ConfirmPassword START */}
              <div className={`field`}>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  value={confirmPassword}
                  onChange={this.handlePasswordChange}
                  type="number"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
                {error && <FormMessage type="error"></FormMessage>}
              </div>
              {/*  ConfirmPassword END */}
            </div>
          </div>
        </div>
        {/* ui grid  */}
        <div className="ui fluid buttons">
          <button className="ui button primary" type="submit">
            OK
          </button>
          <div className="or"></div>
          <span onClick={() => {}} className="ui button">
            CANCEL
          </span>
        </div>
      </form>
    );
  }
}

//<div className={`field ${error.email && "error"}`}>
