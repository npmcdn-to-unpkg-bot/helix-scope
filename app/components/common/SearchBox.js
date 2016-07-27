import React from 'react';
import Fuse from 'fuse.js';

const SearchBox = () => {

  constructor(props) {
    super();
    this.state = {
      countriesList: []
    };
  }

  componentWillMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setElementsList(this.props.data);
  }

  componentWillReceiveProps(newProps) {
    newProps.countriesList && this.setState({ countriesList: newProps.countriesList });
    this.countriesList = newProps.elementscountriesList;
    this.options = {
        caseSensitive: false,
        includeScore: false,
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        keys: ['name']
      };

    this.fuse = new Fuse(this.countriesList, this.options);
  }

  search(event) {
    const token = event.target.value;

    if (token !== '') {
      const result = this.fuse.search(token);
      this.setState({ countriesList: result });
    } else {
      this.setState({ countriesList: this.countriesList });
    }
  }

  return (
    <div className="c-search-box">
      <input type="text" placeholder="Type cpuntry name" onChange={ (event) => this.search(event) }/>
      <svg className="icon-search">
        <use xlinkHref="#icon-search"></use>
      </svg>
    </div>
  );
};

export default SearchBox;
