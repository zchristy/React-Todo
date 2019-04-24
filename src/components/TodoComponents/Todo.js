import React, { Component } from 'react';

import './Todo.css'

class Todo extends Component {

  render() {
    return (
      <div className='todo-container'>
        {this.props.todos}
      </div>
    );
  }
}

export default Todo;
