import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Form,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import NotificationAlert from "react-notification-alert";
import { Button } from "components";
import { hist } from '../../index';
import nowLogo from "assets/img/logo.png";

import { Auth } from "aws-amplify";

// import bgImage from "assets/img/bg14.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerify: false,
      verifycode: '',
      username: '',
      password: ''
    };
  }

  credentialsVaildate() {
    if (!this.state.username) { this.notify_username_null(); return; }
    if (!this.state.password) { this.notify_password_null(); return; }
    // this.notify_success_login();
    this.login();
  }

  notify_username_null() {
    var options = {};
    options = {
      place: 'tc',
      message: (
        <div>
          <div>
            Please enter your username!
          </div>
        </div>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert2.notificationAlert(options);
  }

  notify_password_null() {
    var options = {};
    options = {
      place: 'tc',
      message: (
        <div>
          <div>
            Please enter your password!
          </div>
        </div>
      ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert2.notificationAlert(options);
  }

  notify_success_login() {
    var options = {};
    options = {
      place: 'tc',
      message: (
        <div>
          <div>
            Verification code has been sent to your mobile device.
          </div>
        </div>
      ),
      type: 'success',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert1.notificationAlert(options);
  }

  async login() {
    try {
      await Auth.signIn(this.state.username, this.state.password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  verifyCode() {
    hist.push('/dashboard')
  }
  render() {
    return (
      this.state.isVerify ?
        <div>
          <NotificationAlert ref="notificationAlert1" />
          <div className="full-page-content"
            style={{ background:'linear-gradient(to bottom, #57B9FF , #10509A)', height: 'auto', minHeight: '100vh' }}
          >
            <div className="login-page">
              <Container>
                <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                  <Form>
                    <Card className="card-login card-plain">
                      <CardHeader>
                        <div className="logo-container">
                          <img src={nowLogo} alt="now-logo" />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <InputGroup
                          size="lg"
                          className={
                            "no-border " +
                            (this.state.verifycodeFocus ? "input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons ui-1_send" />
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Verification Code"
                            value={this.state.verifycode}
                            onFocus={e => this.setState({ verifycodeFocus: true })}
                            onBlur={e => this.setState({ verifycodeFocus: false })}
                            onChange={(e) => this.setState({ verifycode: e.target.value })}
                            style={{fontSize:'16px'}}
                          />
                        </InputGroup>
                      </CardBody>
                      <CardFooter>
                        <Button
                          color="primary"
                          size="lg"
                          block
                          round
                          onClick={() => this.verifyCode()}
                        >
                          Verify Code
                      </Button>

                      </CardFooter>
                    </Card>
                  </Form>
                </Col>
              </Container>
            </div>
          </div>
          {/* <div
          className="full-page-background"
          // style={{ backgroundImage: "url(" + bgImage + ")" }}
          style={{ backgroundColor: '#2CA8FF' }}
        /> */}
        </div> :
        <div>
          <NotificationAlert ref="notificationAlert2" />
          <div className="full-page-content"
<<<<<<< HEAD
            style={{ background: 'linear-gradient(to bottom, #57B9FF , #10509A)', height: '-webkit-fill-available' }}
=======
            style={{ background:'linear-gradient(to bottom, #57B9FF , #10509A)', height: 'auto', minHeight: '100vh' }}
>>>>>>> fc4771b50fb73f974dc39339055ee26f0902b76c
          >
            <div className="login-page">
              <Container>
                <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                  <Form>
                    <Card className="card-login card-plain">
                      <CardHeader>
                        <div className="logo-container">
                          <img src={nowLogo} alt="now-logo" />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <InputGroup
                          size="lg"
                          className={
                            "no-border " +
                            (this.state.usernameFocus ? "input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Username"
                            onFocus={e => this.setState({ usernameFocus: true })}
                            onBlur={e => this.setState({ usernameFocus: false })}
                            onChange={(e) => this.setState({ username: e.target.value })}
                            style={{fontSize:'16px'}}
                          />
                        </InputGroup>
                        <InputGroup
                          size="lg"
                          className={
                            "no-border " +
                            (this.state.passwordFocus ? "input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon>
                            <i className="now-ui-icons ui-1_lock-circle-open" />
                          </InputGroupAddon>
                          <Input
                            type="password"
                            placeholder="Password"
                            onFocus={e => this.setState({ passwordFocus: true })}
                            onBlur={e => this.setState({ passwordFocus: false })}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            style={{fontSize:'16px'}}
                          />
                        </InputGroup>
                      </CardBody>
                      <CardFooter>
                        <Button
                          color="primary"
                          size="lg"
                          block
                          round
                          onClick={() => this.credentialsVaildate()}
                        >
                          Login
                      </Button>
                        {/* <div className="pull-left">
                        <h6>
                          <a href="#pablo" className="link footer-link">
                            Create Account
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a href="#pablo" className="link footer-link">
                            Need Help?
                          </a>
                        </h6>
                      </div> */}
                      </CardFooter>
                    </Card>
                  </Form>
                </Col>
              </Container>
            </div>
          </div>
          {/* <div
          className="full-page-background"
          // style={{ backgroundImage: "url(" + bgImage + ")" }}
          style={{ backgroundColor: '#2CA8FF' }}
        /> */}
        </div>

    );
  }
}

export default LoginPage;
