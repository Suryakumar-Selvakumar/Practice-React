import { Component } from "react";
import Count from "./Count";
class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
      editableTodo: [],
      editVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleReSubmit = this.handleReSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(todo) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todoItem) => todoItem !== todo),
    }));
  }

  handleEdit(todo) {
    this.setState((state) => ({
      ...state,
      editableTodo: [todo],
      editVal: todo,
    }));
  }

  handleReSubmit(todo) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.map((todoItem) => {
        if (todoItem == todo) {
          return state.editVal;
        } else {
          return todoItem;
        }
      }),
      editVal: "",
      editableTodo: [],
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task:</label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {!this.state.editableTodo.includes(todo) ? (
                <>
                  {todo}{" "}
                  <button onClick={() => this.handleDelete(todo)}>
                    Delete todo
                  </button>{" "}
                  <button onClick={() => this.handleEdit(todo)}>
                    Edit todo
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="task-edit"
                    value={this.state.editVal}
                    onChange={(e) => {
                      this.setState((state) => ({
                        ...state,
                        editVal: e.target.value,
                      }));
                    }}
                  />
                  <button onClick={() => this.handleReSubmit(todo)}>
                    Resubmit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
