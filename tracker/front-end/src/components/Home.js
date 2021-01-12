import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import HangTime from "./HangList";
import NewHangModal from "./NewHangModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    hang: []
  };

  componentDidMount() {
    this.resetState();
  }

  getHangs = () => {
    axios.get(API_URL).then(res => this.setState({ hang: res.data }));
  };

  resetState = () => {
    this.getHangs();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <HangTime
              hang={this.state.hang}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewHangModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
