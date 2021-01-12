import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewHangForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    hold: "",
    fingers_used: "",
    grip_used: "",
    weight: "",
    duration: ""
  };
//start of new code

  constructor(props){
      super(props)
      this.state = {
        time: 0,
        start: 0,
        isOn: false
      }
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
      this.setState({
        time: this.state.time,
        start: Date.now() - this.state.time,
        isOn: true
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1000);
    }
    stopTimer() {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }
    resetTimer() {
      this.setState({time: 0})
    }
  handleClick = () => {
    this.setState(({ duration }) => ({
      duration: duration + 1
    }));
  };
//end of new code
  componentDidMount() {
    if (this.props.hang) {
      const { pk, name, hold, fingers_used, grip_used, weight, duration } = this.props.hang;
      this.setState({ pk, name, hold, fingers_used, grip_used, weight, duration });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createHang = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editHang = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    const divStyle = {
      color: 'red',
      float: 'right',
    };
    let start = (this.state.time == 0) ?
      <Button onClick={this.startTimer}>Start</Button> :
      null
    let stop = (this.state.isOn) ?
      <Button onClick={this.stopTimer}>Stop</Button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <Button onClick={this.resetTimer}>Reset</Button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <Button onClick={this.startTimer}>Resume</Button> :
      null
    return (
      <Form onSubmit={this.props.hang ? this.editHang : this.createHang}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hold">Hold Type:</Label>
          <Input type="select" name="hold" onChange={this.onChange} value={this.defaultIfEmpty(this.state.hold)}>
            <option>Please Select</option>
            <option>6mm Crimp</option>
            <option>8mm Crimp</option>
            <option>10mm Crimp</option>
            <option>20mm Crimp</option>
            <option>25mm Pocket</option>
            <option>25mm Mono</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="fingers_used">Fingers:</Label>
          <Input type="select" name="fingers_used" onChange={this.onChange} value={this.defaultIfEmpty(this.state.fingers_used)}>
            <option>Please Select</option>
            <option>Full</option>
            <option>Index</option>
            <option>Middle</option>
            <option>Ring</option>
            <option>Pinky</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="grip_used">Grip Used:</Label>
          <Input type="select" name="grip_used" onChange={this.onChange} value={this.defaultIfEmpty(this.state.grip_used)}>
            <option>Please Select</option>
            <option>Full Crimp</option>
            <option>Half Crimp</option>
            <option>Open Crimp</option>
            <option>Pinch</option>
            <option>Mono</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight Added (lb.):</Label>
          <Input type="number" name="weight" min="0" onChange={this.onChange} value={this.defaultIfEmpty(this.state.weight)}
          />
        </FormGroup>
          <FormGroup>
            <Label for="duration">Duration (s):</Label>
            <Input type="number" name="duration" min="0" onChange={this.onChange} value={this.defaultIfEmpty(this.state.duration)}
            />
        </FormGroup>
        <Button>Send</Button>
             <h3 style={divStyle}>Timer: {Math.round(this.state.time/1000)}</h3>
             {start}
             {resume}
             {stop}
             {reset}
      </Form>
    );
  }
}

export default NewHangForm;
