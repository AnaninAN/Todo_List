import './SearchPanel.scss';

import React from 'react';

export const SearchPanel = () => {
  return (
    <input type="text"
      className="search-input form-control"
      placeholder="type to search" />
  );
};