import React, {Component} from "react"

import {Button, InputGroup, FormControl} from "react-bootstrap"

export default class JobComponent extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <div>
          What is Your Current Status
          <select name="job" form="carform">
            <option value="select">Select</option>
          </select>
        </div>
      </div>
    )
  }
}
