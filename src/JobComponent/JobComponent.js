import React, {Component} from "react"

import {Button, InputGroup, FormControl} from "react-bootstrap"

export default class JobComponent extends Component {
  render() {
    const { id } = this.props;

    return (
      <div>
        Job {id}
        <div>
          What is your occupation?
          <select name="job" form="carform">
            <option value="select">Select</option>
          </select>
          </div>
        <div>
          Company Name
          <input placeholder="Enter Company Name"/>
        </div>
        <div>
          Income
          <input placeholder="Enter Income" />
        </div>
      </div>
    )
  }
}
