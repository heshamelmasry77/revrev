import React, { Component } from 'react';
import Test from './components/Test';
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
          <Tab className="Tab" label="Tab A" value="a">
            <div>
              <h2>Controllable Tab A</h2>
              <p>
                <Test />
              </p>
            </div>
          </Tab>
          <Tab className="Tab" label="Tab B" value="b">
            <div>
              <h2>Controllable Tab B</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values
                or else you wont be able to select them.
              </p>
            </div>
          </Tab>
          <Tab label="Tab C" value="c">
            <div>
              <h2>Controllable Tab C</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values
                or else you wont be able to select them.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Search;
