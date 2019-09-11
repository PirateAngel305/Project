import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import Interns from "./components/projects/Interns.jsx";
import AddAdmin from "./components/projects/AddAdmin.jsx";
import Apply from "./components/projects/Apply.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import CreateProject from "./components/projects/CreateProject.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "components/Header/Header.jsx";
import SignedOutLinks from "components/Header/SignedOutLinks.jsx";
import SignedInLinks from "components/Header/SignedInLinks.jsx";
import AdminLinks from "components/Header/AdminLinks.jsx";
import StudentLinks from "components/Header/StudentLinks.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    const { auth, profile } = this.props;
    let links;
    if (auth.uid) {
      if (profile.category === "admin") {
        links = <AdminLinks profile={profile} />;
      }
      if (profile.category === "company") {
        links = <SignedInLinks profile={profile} />;
      }
      if (profile.category === "student") {
        links = <StudentLinks profile={profile} />;
      }
    } else {
      links = <SignedOutLinks />;
    }

    const go = auth.uid ? "dark" : "transparent";

    return (
      <BrowserRouter>
        <div className="App">
          <Header
            absolute
            color={go}
            brand="Project Lister"
            rightLinks={links}
            fixed
            changeColorOnScroll={{
              height: 180,
              color: "white"
            }}
            {...rest}
          />
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/interns" component={Interns} />
            <Route path="/admins" component={AddAdmin} />
            <Route path="/apply/:id" component={Apply} />
            <Route path="/create" component={CreateProject} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(App);
