import React, { Component } from "react";
import { connect } from "react-redux";
import { adminRole } from "../../store/actions/adminActions";

import { Redirect } from "react-router-dom";
import { compose } from "redux";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class AddAdmin extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    category: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleCheck = e => {
    this.setState({
      selectedEnabled: e.target.value,
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.adminRole(this.state);
    // this.props.history.push("/");
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
                    <h2 className={classes.title}>Add InternShip</h2>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="First Name..."
                            id="firstName"
                            onChange={this.handleChange}
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Email..."
                            id="email"
                            onChange={this.handleChange}
                            required
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Password"
                            id="password"
                            onChange={this.handleChange}
                            required
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Lock className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          {/* <div className={classes.title}>
                            <h3>Radio Buttons</h3>
                          </div> */}
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={
                                    this.state.selectedEnabled === "admin"
                                  }
                                  onChange={this.handleCheck}
                                  value="admin"
                                  id="category"
                                  name="radio button enabled"
                                  aria-label="A"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label
                              }}
                              label="Admin"
                            />
                          </div>
                          {/* <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={
                                    this.state.selectedEnabled === "company"
                                  }
                                  onChange={this.handleCheck}
                                  value="company"
                                  id="category"
                                  name="radio button enabled"
                                  aria-label="B"
                                  icon={
                                    <FiberManualRecord
                                      className={classes.radioUnchecked}
                                    />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord
                                      className={classes.radioChecked}
                                    />
                                  }
                                  classes={{
                                    checked: classes.radio
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label
                              }}
                              label="Company"
                            />
                          </div> */}
                        </GridItem>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={4}
                            className={classes.textCenter}
                          >
                            <Button color="primary" onClick={this.handleSubmit}>
                              Add Admin
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
    adminRole: adminrole => dispatch(adminRole(adminrole))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(workStyle),
  withStyles(basicsStyle),
  withStyles(landingPageStyle)
)(AddAdmin);
