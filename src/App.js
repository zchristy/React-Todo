import React, { Component } from 'react';

import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

class App extends Component {
  constructor(props) {
    super(props);

    // Seed data
    this.state = {
      todos: [
              {
                id: Date.now() + 1,
                task: 'Learn React',
                isCompleted: 'false'
              },
              {
                id: Date.now() + 2,
                task: 'Build Todo App',
                isCompleted: 'false'
              },
              {
                id: Date.now() + 3,
                task: 'Be Awesome',
                isCompleted: 'false'
              }
      ]
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Create new Object in state array with the user input value
    this.setState({
      todos: [...this.state.todos, {
        id: Date.now(),
        task: event.target.querySelector('#todoInput').value,
        isCompleted: 'false'
      }]
    });
    // reset input box
    event.target.reset();
  }

  handleDelete = (event) => {
    // slice state todos array to create new array
    const todosArray = [...this.state.todos];
    // Grab clicked element
    const clickedTask = event.target.getAttribute("delete");
    // find object index of clicked element and return index
    const index = todosArray.findIndex(todo => {
      return todo.task === clickedTask;
    });
    if(index !== -1) {
      // remove object from new array
      todosArray.splice(index, 1);
      // set state to new array
      this.setState({ todos: todosArray});
    }
  }

  handleDone = (event) => {
    // slice state todos array to create new array
    const todosArray = [...this.state.todos];

    // Grab clicked element
    const clickedTask = event.target.getAttribute("done");
    // find object index of clicked element and return index
    const index = todosArray.findIndex(todo => {
      return todo.task === clickedTask;
    });

    // change value of isCompleted in new array
    if(todosArray[index].isCompleted === 'false') {
       todosArray[index].isCompleted = 'true';
       event.target.classList.add('done');
    } else {
      todosArray[index].isCompleted = 'false';
      event.target.classList.remove('done');
    }

    // set state to new array
    this.setState({ todos: todosArray});

  }

  handleCLearCompleted = (event) => {
    // slice state todos array to create new array
    const todosArray = [...this.state.todos];
    // set state to new array
    this.setState({ todos: todosArray.filter(todo => {
                              return todo.isCompleted === 'false'
                            })
    });
    // reset classList Node on clear all
    document.querySelector('li').classList.remove('done');
  }

  // Combining all click events into one method
  click = (event) => {
    if(event.target.getAttribute('name') === 'task'){
      this.handleDone(event);
    } else if (event.target.getAttribute('name') === 'delete'){
      this.handleDelete(event);
    } else if(event.target.getAttribute('id') === 'clear') {
      this.handleCLearCompleted(event);
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
