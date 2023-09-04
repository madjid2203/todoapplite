import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Add new todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
