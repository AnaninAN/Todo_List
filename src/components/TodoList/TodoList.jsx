import './TodoList.scss';

import React, { Component } from 'react';

import { TodoListItem } from 'components/TodoListItem';

export class TodoList extends Component {
  render() {
    const { todos } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={item.id} className="list-group-item" >
          <TodoListItem {...itemProps} />
        </li>
      );
    });

    return (
      <ul className="todo-list list-group">
        {elements}
      </ul>
    );
  };
}