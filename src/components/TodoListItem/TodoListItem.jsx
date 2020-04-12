import './TodoListItem.scss';

import React from 'react';
import classNames from 'classnames';

export const TodoListItem = ({ label, important = false }) => {
  const classes = classNames('todo-list-item-label', {
    'important': important,
  });

  return (
    <span className="todo-list-item">
      <span className={classes}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};