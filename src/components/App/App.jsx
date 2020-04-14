import './App.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { SearchPanel } from 'components/SearchPanel';
import { ItemStatusFilter } from 'components/ItemStatusFilter';
import { TodoList } from 'components/TodoList';
import { ItemAddForm } from 'components/ItemAddForm';

export class App extends Component {

  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all',
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false,
    };
  }

  handleDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      };
    });
  };

  handleAddItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const newItem = {...arr[idx], [propName]: !arr[idx][propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  handleToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  handleToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.toUpperCase().indexOf(term.toUpperCase()) > -1);
  };

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  };

  handleSearch = (term) => {
    this.setState({ term });
  };

  handleButtonClick = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.search(this.filter(todoData, filter), term);

    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return(
      <div className="todo-app">
        <Header toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.handleSearch}/>
          <ItemStatusFilter onButtonClick={this.handleButtonClick} filter={filter} />
        </div>

        <TodoList todos={visibleItems}
                  onDeleted={this.handleDeleteItem}
                  onToggleImportant={this.handleToggleImportant}
                  onToggleDone={this.handleToggleDone} />
        <ItemAddForm onAdd={this.handleAddItem} />
      </div>
    );
  };
}