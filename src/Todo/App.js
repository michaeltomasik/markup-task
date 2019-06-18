import React, {Component} from "react"
import {Button, ListGroupItem, ListGroup} from "react-bootstrap"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      value: '',
    }
  }

  handleClick = () => {
    this.setState({
      value: '',
      data: [...this.state.data, this.state.value],
    })
  }

  handleOnChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        {this.state.data.length ? <ListGroup>
          {this.state.data.map((item, i) =>
            <ListGroupItem key={i}>{item}</ListGroupItem>)
          }
        </ListGroup> : <i>Nothing added</i>}
        <input
          value={this.state.value}
          onChange={(e) => this.handleOnChange(e.target.value)} />
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
