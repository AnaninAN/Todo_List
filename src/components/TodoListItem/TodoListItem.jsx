import './TodoListItem.scss';

import React from 'react';
import classNames from 'classnames';

export const TodoListItem = ({ label, done, important,
                               onDeleted, onToggleDone,
                               onToggleImportant }) => {

  const classes = classNames('todo-list-item', {
    'done': done,
    'important': important,
  });

  return (
    <span className={classes}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};