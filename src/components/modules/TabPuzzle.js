import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Helmet from 'react-helmet';
import Test from './Test';

class TabPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 2
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(key) {
    this.setState({ key });
  }
  render() {
    return (
      <div className="TabPuzzle">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My test page</title>
          <meta name="description" content="Helmet test" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Tab 1">
            {' '}
            <Test />{' '}
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            {' '}
            Tab Content 2{' '}
          </Tab>
          <Tab eventKey={3} title="Tab 3">
            {' '}
            Tab Content 3{' '}
          </Tab>
        </Tabs>
        <button onClick={() => this.handleSelect(3)}>Go to tab 3</button>
      </div>
    );
  }
}
export default TabPuzzle;
