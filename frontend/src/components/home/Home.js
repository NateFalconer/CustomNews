import React, { Component, Fragment } from "react";
import actions from "../../services/index";
import Virus from "../../components/virus/Virus"

import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Row,
  Button
} from "react-bootstrap";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <Fragment>
        <Form.Group>
          <div>
            <div className="frontBlock">
              <div className="frontTop">
                <h1>Welcome to the COVID-19 Tracker.</h1>
              <br />
              <h3>
                Get the latest Coronavirus information here, tailored to your
                location.
              </h3>
              <br />
              <h4>
                Like your favorite articles and check the User Feed to see what
                other users have Liked.
              </h4>
              <div className="frontButtons">
              <Button
            className="btn-lg btd-dark btn-success"
            variant="primary"
            type="submit"
            href="/log-in"
          >
            Login
          </Button>
            <Button
              className="button2 btn-lg btd-dark btn-success"
              variant="primary"
              type="submit"
              href="/sign-up"
            >
              Sign Up
            </Button>
            </div>
            </div>
            <div className="homePageImage">
            <Virus />
            </div>
            </div>
          </div>
        </Form.Group>
      </Fragment>
    );
  }
}

export default Home;
