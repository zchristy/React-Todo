import React, { Component } from 'react';

import './Todo.css'

class TodoForm extends Component {

  render() {
    return (
      <div className='todo-form-container'>
        <form onSubmit={this.props.onSubmit}>
          <input id='todoInput' type="text" placeholder="Insert your task here..."  />
        </form>
      </div>
    );
  }
}

export default TodoForm;
