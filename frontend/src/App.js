import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
// import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import About from "./components/about/About"
import Profile from "./components/profile/Profile";
import Coronavirus from "./components/coronavirus/Coronavirus";
import actions from "./services/index";
import axios from "axios";
import Main from "./components/main/Main";
import Prevention from "./components/prevention/Prevention"
import ArticleDetails from "./components/article/ArticleDetails";
import UserFeed from "./components/user_feed/User_Feed";
import Navbar2 from "./components/navbar/Navbar2";
import 'bootstrap/dist/css/bootstrap.min.css';


let apiKey = "3d317330f7724477a808676552aeec15"

class App extends Component {
  state = {
    newsEvents: [],
    ready: false
  };

  // ok
  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log(user)
    this.apiCall(user)
  }

   apiCall = async (user) => {
    var url = `https://newsapi.org/v2/top-headlines?country=${user.data.country}&category=health&apiKey=${apiKey}`
    // var usUrl = `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
    let newsEvents = await axios.get(url);
    // if(newsEvents.data.length === 0) {
    //   newsEvents = await axios.get(usUrl);
    // }
    console.log(newsEvents.data);

    this.setState({
      newsEvents: newsEvents.data,
      ready: true
    });
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
      <BrowserRouter>
        {/* {this.state.userName} */}
        {/* <NavLink to="/upload-image">Upload Image</NavLink> */}
        {/* <Navbar email={this.state.email} /> */}
        <Navbar2 className="navB" email={this.state.email} />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={props => <SignUp {...props} setUser={this.setUser} apiCall={this.apiCall} />}
          />
          <Route
            exact
            path="/log-in"
            render={props => <LogIn {...props} setUser={this.setUser} apiCall={this.apiCall}/>}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={this.state} />}
          />
          <Route
            exact
            path="/about"
            render={props => <About {...props} user={this.state} />}
          />
          <Route
            exact
            path="/map"
            render={props => <Coronavirus {...props} user={this.state} />}
          />
          <Route
            exact
            path="/prevention"
            render={props => <Prevention {...props} user={this.state} />}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <Main
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/article-details/:detail"
            render={props => (
              <ArticleDetails
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/upload-image"
            render={props => (
              <imageUpload
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/user-feed"
            render={props => (
              <UserFeed
                {...props}
                user={this.state}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
                setUser={this.setUser}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
