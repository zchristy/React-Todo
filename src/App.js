import React, { Component } from 'react';
import SimpleStorage from "react-simple-storage";

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
    const deletedElement = todosArray.filter(todo => {
      return todo.task === clickedTask;
    });

    const index = todosArray.indexOf(deletedElement[0]);
    // remove object from new array
    todosArray.splice(index, 1);

    // set state to new array
    this.setState({ todos: todosArray});
  }

  handleDone = (event) => {
    // slice state todos array to create new array
    const todosArray = [...this.state.todos];

    // Grab clicked element
    const clickedTask = event.target.getAttribute("done");
    // find object index of clicked element and return index
    const doneElement = todosArray.filter(todo => {
      return todo.task === clickedTask;
    });
    console.log(doneElement);
    // change value of isCompleted in new array
    if(doneElement[0].isCompleted === 'false') {
       doneElement[0].isCompleted = 'true';
       event.target.classList.add('done');
    } else {
      doneElement[0].isCompleted = 'false';
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
    if(todosArray.length !== 0) {
      const li = document.querySelectorAll('li');
      li.forEach(val => val.classList.remove('done'));
    }
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
        <SimpleStorage parent={this} />
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
