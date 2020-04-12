import './App.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { SearchPanel } from 'components/SearchPanel';
import { ItemStatusFilter } from 'components/ItemStatusFilter';
import { TodoList } from 'components/TodoList';

export class App extends Component {
  todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Make Awesome App', important: true },
    { id: 3, label: 'Have a lunch', important: false },
  ];

  render() {
    return(
      <div className="todo-app">
        <Header toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.todoData} />
      </div>
    );
  };
}