import React, { Component, Fragment } from "react";
import actions from "../../services/index";
import {
  Form,
  Button
} from "react-bootstrap";

class LogIn extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        console.log(user);
        this.props.setUser({ ...user.data });
        this.props.history.push("/home");
        this.props.apiCall(user);
      })
      .catch(({ response }) => console.error(response.data));
  };
  render() {
    //console.log(this.props)
    return (
      <Fragment>
        {/* <h2>LogIn</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Email</p>
            <input name="email" type="email" onChange={this.handleChange} />
          </div>
          <div>
            <p>Password</p>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Location</p>
            <input
              name="location"
              type="location"
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <input type="submit" value="Login" />
        </form> */}

        <Form className="login-form" onSubmit={this.handleSubmit}>
          {/* <h2>
            <span class="font-weight-bold">Welcome</span>
          </h2> */}
          <br></br>
          <h4 className="text-center"> Log in to COVID-19 Tracker</h4>
          <Form.Group className="text-center" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="text-center" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="text-center" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button
            className="btn-lg btd-dark btn-block"
            variant="primary"
            type="submit"
            value="Login"
          >
            Log In
          </Button>
          <br></br>
          <div className="text-center">
            <a href="/sign-up">Sign Up for an account</a>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default LogIn;
