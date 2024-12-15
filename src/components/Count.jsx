import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Number of todos: {this.props.todos.length}</div>;
  }
}

export default Count;
