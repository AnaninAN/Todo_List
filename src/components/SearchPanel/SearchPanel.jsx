import './SearchPanel.scss';

import React, { Component } from 'react';

export class SearchPanel extends Component {

  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const { onSearch } = this.props;

    const term = e.target.value;
    this.setState({ term });
    onSearch(term);
  };

  render() {
    return (
      <input type="text"
        className="search-input form-control"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange} />
    );
  };
};