import './ItemAddForm.scss';

import React, { Component } from 'react';

export class ItemAddForm extends Component {

  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { onAdd } = this.props;
    const { name } = this.state;

    e.preventDefault();
    onAdd(name);

    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <form className="item-add-form"
            onSubmit={this.onSubmit}>
        <input type="text"
          className="item-input form-control"
          placeholder="add to item"
          value={name}
          onChange={this.handleChange} />
        <button className="add-item btn btn-success">
          Add Item
        </button>
      </form>
    );
  };
}