import './ItemStatusFilter.scss';

import React, { Component } from 'react';
import className from 'classnames';

export class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {
    const { filter, onButtonClick } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {

      const classes = className('btn', {
        'btn-info': filter === name,
        'btn-outline-secondary': filter !== name,
      });

      return (
        <button key={name}
                type="button"
                className={classes}
                onClick={() => onButtonClick(name)}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
}