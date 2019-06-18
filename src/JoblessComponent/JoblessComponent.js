import React, {Component} from "react"

import { InputGroup} from "react-bootstrap"

export default class JobComponent extends Component {
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          What is Your Current Status
          <select name="job" form="carform">
            <option value="select">Select</option>
          </select>
          
        </InputGroup>
      </div>
    )
  }
}
