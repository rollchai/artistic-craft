import React from 'react';

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search handcrafted items...',
  onSearch,
}) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch && onSearch(value)}
        placeholder={placeholder}
        className="search-input"
      />
      <button className="search-button" onClick={() => onSearch && onSearch(value)} type="button">
        🔍
      </button>
    </div>
  );
};
