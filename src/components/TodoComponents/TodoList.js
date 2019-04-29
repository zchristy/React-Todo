import React, { Component } from 'react';

import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'

class TodoList extends Component {

  render() {
    const todos = this.props.todos.map((todo) => {
      return <li name='task' done={todo.task} className='task' key={todo.task} onClick={this.props.onClick} >
                {todo.task}
                <span name='delete' delete={todo.task} >X</span>
            </li>;
    });
    return (
      <div className='container'>
        <h2 id="clear" onClick={this.props.onClick} >Clear Completed</h2>
        <ul className='list'>
          <Todo todos={todos} />
        </ul>
          <TodoForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default TodoList;
