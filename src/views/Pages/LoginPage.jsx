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

import { Button } from "components";

import nowLogo from "assets/img/logo.png";

// import bgImage from "assets/img/bg14.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="full-page-content">
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
                          (this.state.firstnameFocus ? "input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon>
                          <i className="now-ui-icons users_circle-08" />
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          onFocus={e => this.setState({ firstnameFocus: true })}
                          onBlur={e => this.setState({ firstnameFocus: false })}
                        />
                      </InputGroup>
                      <InputGroup
                        size="lg"
                        className={
                          "no-border " +
                          (this.state.lastnameFocus ? "input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon>
                          <i className="now-ui-icons ui-1_lock-circle-open" />
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Password"
                          onFocus={e => this.setState({ lastnameFocus: true })}
                          onBlur={e => this.setState({ lastnameFocus: false })}
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter>
                      <Button
                        color="primary"
                        size="lg"
                        block
                        round
                        href="#pablo"
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
        <div
          className="full-page-background"
          // style={{ backgroundImage: "url(" + bgImage + ")" }}
          style={{backgroundColor:'#2CA8FF'}}
        />
      </div>
    );
  }
}

export default LoginPage;
