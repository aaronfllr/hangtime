import React, { Component } from "react";
import { Table } from "reactstrap";
import NewHangModal from "./NewHangModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class HangTime extends Component {
  render() {
    const hang = this.props.hang;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hold</th>
            <th>Fingers Used</th>
            <th>Grip Type</th>
            <th>Weight</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {!hang || hang.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            hang.map(hang => (
              <tr key={hang.pk}>
                <td>{hang.name}</td>
                <td>{hang.hold}</td>
                <td>{hang.fingers_used}</td>
                <td>{hang.grip_used}</td>
                <td>{hang.weight}</td>
                <td>{hang.duration}</td>
                <td align="center">
                  <NewHangModal
                    create={false}
                    hang={hang}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={hang.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default HangTime;
