// import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

// class Navbar extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//       <Navbar sticky="top" bg="primary" variant="dark">
//             <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
//             <Nav className="mr-auto">
//               <Nav.Link href="/home">Latest News</Nav.Link>
//               <Nav.Link href="/user-feed">User Feed</Nav.Link>
//               <Nav.Link href="/map">Map</Nav.Link>
//               <Nav.Link href="/prevention">More Resources</Nav.Link>
//             </Nav>
//             <Nav>
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/profile">Profile</Nav.Link>
//               <Nav.Link onClick={this.logOut} href="/">Logout</Nav.Link>
//             </Nav>
//           </Navbar> :
//           <Navbar sticky="top" bg="primary" variant="dark">
//             <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
//             <Nav className="mr-auto">
//             </Nav>
//             <Nav>
//               <Nav.Link href="/sign-up">Sign Up</Nav.Link>
//               <Nav.Link href="/log-in">Login</Nav.Link>
//             </Nav>
//           </Navbar>
//     );
//   }
// }

// export default Navbar;

// {this.props.email ?
//     <Navbar sticky="top" bg="primary" variant="dark">
//       <Nav className="allBar">
//       <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
//       <Nav className="mr-auto">
//         <Link to="/home">Latest News</Link>
//         <Link to="/user-feed">User Feed</Link>
//         <Link to="/map">Map</Link>
//         <Link to="/prevention">More Resources</Link>
//       </Nav>
//       <Nav>
//         <Link to="/about">About</Link>
//         <Link to="/profile">Profile</Link>
//         <Link onClick={this.logOut} to="/">Logout</Link>
//       </Nav>
//       </Nav>
//     </Navbar> :
//     <Navbar sticky="top" bg="primary" variant="dark">
//       <Nav className="botNav">
//       <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
//       <Nav className="mr-auto">
//       </Nav>
//       <Nav>
//         <Link to="/sign-up">Sign Up</Link>
//         <Link to="/log-in">Login</Link>
//       </Nav>
//     </Nav>
//     </Navbar>
//   }