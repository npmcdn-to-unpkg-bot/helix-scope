import React from 'react';

const SearchBox = () => {




  return (
    <div className="c-search-box">
      <input type="text" placeholder="Type cpuntry name"/>
      <svg className="icon-search">
        <use xlinkHref="#icon-search"></use>
      </svg>
    </div>
  );
};

export default SearchBox;
