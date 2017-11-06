import React, { Component } from 'react';
import SearchCompanies from './components/SearchCompanies';

import '../../stylesheets/search/Search.css';

import { Tabs, Tab } from 'material-ui/Tabs';

// import Test from './Test';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <div className="Search">
        <Tabs
          className="Tabs"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab className="Tab" label="Companies" value="a">
            <div>
              <h2>Companies</h2>
              <SearchCompanies />
            </div>
          </Tab>
          <Tab className="Tab" label="Salaries" value="b">
            <div>
              <h2>Salaries</h2>
              <p>to be implemented search for salaries </p>
            </div>
          </Tab>
          <Tab label="Interviews" value="c">
            <div>
              <h2>Interviews</h2>
              <p>to be implemented search for interviews </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Search;
