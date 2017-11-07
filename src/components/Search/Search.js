import React, { Component } from 'react';
// import SearchCompanies from './components/SearchCompanies';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import SearchCompanies from '../Search/components/SearchCompanies';
import '../../stylesheets/Search.css';

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
        <div>
          <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
            <Tab eventKey={1} title="Tab 1">
              <SearchCompanies />
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Tab 3" disabled>
              Tab 3 content
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Search;
