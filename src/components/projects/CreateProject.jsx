import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class CreateProject extends Component {
  state = {
    team_member_1_name: "",
    team_member_2_name: "",
    team_member_3_name: "",
    project_title: "",
    guide_name: "",
    co_guide_name: "",
    abstract: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <Parallax small filter image={require("assets/img/bg7.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Add Projects</h2>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Team Member 1 Name"
                            id="team_member_1_name"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Team Member 2 Name"
                            id="team_member_2_name"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Team Member 3 Name"
                            id="team_member_3_name"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Project Title"
                            id="project_title"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Guide Name"
                            id="guide_name"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Co-Guide Name"
                            id="co_guide_name"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>

                        <CustomInput
                          labelText="Abstract"
                          id="abstract"
                          onChange={this.handleChange}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.textArea
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5
                          }}
                        />

                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={4}
                            className={classes.textCenter}
                          >
                            <Button color="primary" onClick={this.handleSubmit}>
                              Add
                            </Button>
                          </GridItem>
                        </GridContainer>
                      </GridContainer>
                    </form>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(workStyle),
  withStyles(landingPageStyle)
)(CreateProject);
