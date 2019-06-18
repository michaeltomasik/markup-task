import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"
import JobComponent from '../JobComponent/JobComponent.js';
import JoblessComponent from '../JoblessComponent/JoblessComponent.js';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
          <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
          <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
          <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
        </ButtonGroup>
        {jobCount ?
          Array(jobCount).fill(0).map((_, id) => <JobComponent id={id}/>):
          <JoblessComponent /> 
        }
      </div>
    )
  }
}
