import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Danger from "components/Typography/Danger.jsx";
import image from "assets/img/bg7.jpg";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    // this.props.signIn(this.state);
  };
  render() {
    const { classes } = this.props;
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <h1>Any place in your app!</h1>
                      <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 400);
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <CustomInput
                              labelText="Email..."
                              id="email"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                type: "email",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Email
                                      className={classes.inputIconsColor}
                                    />
                                  </InputAdornment>
                                )
                              }}
                              onChange={this.handleChange}
                              required="true"
                            />
                            <ErrorMessage name="email" component="div" />
                            <Field
                              type="password"
                              name="password"
                              component={Input}
                            />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                              Submit
                            </button>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </Button>
                  </CardFooter>
                  <div
                    style={{
                      paddingLeft: "40%",
                      paddingRight: "35%",
                      marginBottom: "10px",
                      position: "relative"
                    }}
                  >
                    <Danger>{authError ? <p>{authError}</p> : null}</Danger>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(loginPageStyle),
  withStyles(basicsStyle)
)(Login);
