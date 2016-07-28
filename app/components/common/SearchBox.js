import React from 'react';
import Fuse from 'fuse.js';

class SearchBox extends React.Component {

  constructor(props) {
    super();
    this.state = {};
    this.props = props;
  }

  componentWillMount() {
    /* data will specify what kind of section will be rendered */
    this.props.setCountriesList(this.props.data);
  }

  componentWillReceiveProps(newProps) {
    newProps.countriesList && this.setState({ countriesList: newProps.countriesList });

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

    const countries = newProps.countriesList.slice(0);
    this.countriesList = this.sortFunction(countries);

    this.fuse = new Fuse(this.countriesList, this.options);
  }

  search(event) {
    const token = event.target.value;
    if (token !== '') {
      const result = this.fuse.search(token);
      const resultsort = this.sortFunction(result);

      this.setState({ resultsList: resultsort });
    } else {
      this.setState({ resultsList: this.countriesList });
    }
  }

  sortFunction(countries) {
    return countries.sort(function(a, b) {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();

      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  clearSearch(e) {
    e.currentTarget.value = ''
    this.setState({ resultsList: '' });
  }

  render() {
    const list = this.state.resultsList;

    return (
      <div className="c-search-box">
        <input type="text" placeholder="Type cpuntry name" onChange={ (event) => this.search(event)} onBlur={this.clearSearch.bind(this)}/>
        <svg className="icon-search">
          <use xlinkHref="#icon-search"></use>
        </svg>
        { list && list.map((element, i) =>
          <div key={i} className="resultsList">
            <a href="{ element.iso }" className="">{ element.name }</a>
          </div>
        )}
      </div>
    );
  }
};

export default SearchBox;
