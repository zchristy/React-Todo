import React, { Component } from 'react';

import Todo from './Todo'
import TodoForm from './TodoForm'
import './Todo.css'

class TodoList extends Component {

  render() {
    const todos = this.props.todos.map((todo, i) => {
      return <li name='task' complete={todo.task} className='task' key={i} onClick={this.props.onClick} >
                {todo.task}
                <span name='delete' delete={todo.task} onClick={this.props.onClick} >X</span>
            </li>;
    });
    return (
      <div className='container'>
        <ul className='list'>
          <Todo todos={todos} />
        </ul>
          <TodoForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default TodoList;
