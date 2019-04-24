import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
              {
                id: Date.now() + 1,
                task: 'Learn React',
                isCompleted: false
              },
              {
                id: Date.now() + 2,
                task: 'Build Todo App',
                isCompleted: false
              },
              {
                id: Date.now() + 3,
                task: 'Be Awesome',
                isCompleted: false
              }
      ]
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        id: Date.now(),
        task: event.target.querySelector('#todoInput').value,
        isCompleted: 'false'
      }]
    });
    event.target.reset();
  }

  handleDelete = (event) => {
    const todosArray = [...this.state.todos];
    const clickedTask = event.target.getAttribute("delete");
    const index = todosArray.findIndex(todo => {
      return todo.task === clickedTask;
    });
    if(index !== -1) {
      todosArray.splice(index, 1);
      this.setState({ todos: todosArray});
    }
  }

  handleDone = (event) => {
    event.target.classList.toggle('done');

    const todosArray = [...this.state.todos];
    const clickedTask = event.target.getAttribute("complete");
    const index = todosArray.findIndex(todo => {
      return todo.task === clickedTask;
    });
    todosArray[index].isCompleted = true;
    this.setState({ todos: todosArray});
    console.log(this.state.todos);
  }

  click = (event) => {
    if(event.target.getAttribute('name') === 'task'){
      this.handleDone(event);
    } else if (event.target.getAttribute('name') === 'delete'){
      this.handleDelete(event);
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Todo List</h1>
          <h2>Keep Track of what Needs to Be Done!</h2>
        </header>
        <TodoList
            todos={this.state.todos}
            onSubmit={this.handleSubmit}
            onClick={this.click}
            />
      </div>
    );
  }
}

export default App;
