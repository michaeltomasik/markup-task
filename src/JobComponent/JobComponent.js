import React, {Component} from "react"

import { InputGroup, FormControl} from "react-bootstrap"

export default class JobComponent extends Component {
  render() {
    const { id } = this.props;

    return (
      <div>
        <InputGroup>
          Job {id}
          <div>
            What is your occupation?
            <select name="job" form="carform">
              <option value="select">Select</option>
            </select>
            </div>
          <div>
            Company Name
            <FormControl
              placeholder="Enter Company Name"
            />
          </div>
          <div>
            Income
            <FormControl
              placeholder="Enter Income"
            />
          </div>
        </InputGroup>
      </div>
    )
  }
}
