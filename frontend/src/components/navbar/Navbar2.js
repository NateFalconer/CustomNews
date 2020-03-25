import React, { Component } from "react";
import actions from "../../services/index"
import { Navbar, Nav } from 'react-bootstrap'

class Navbar2 extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
  }

  setUser = user => this.setState(user);

  logOut = async () => {
    await actions.logOut();
    this.setUser({
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null,
      userName: null
    }); //FIX
  };

  render() {
    return (
      <div>
        {this.props.email ?
        <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand>COVID-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">News</Nav.Link>
              <Nav.Link href="/user-feed">User Feed</Nav.Link>
              <Nav.Link href="/map">Map</Nav.Link>
              <Nav.Link href="/prevention">More</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link onClick={this.logOut} href="/">Logout</Nav.Link>
            </Nav>
          </Navbar>
    :
          <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand>COVID-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/log-in">Login</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar>
  }
      </div>
    );
  }
}

export default Navbar2;
