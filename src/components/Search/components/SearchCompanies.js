import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import data from '../../../testData.json';
import GoBeer from 'react-icons/lib/go/beer';

class SearchCompanies extends Component {
  // we can use this also
  state = {
    contests: []
  };
  // This is the life cycle method that guarantees
  // that the DOM has been mounted in the browser successfully
  componentDidMount() {
    console.log('did mount');
    // debugger;
    //after react get mounted
    this.setState({
      contests: data.contests
    });
  }

  // This is the life cycle method that
  // says the component is about to be unmounted
  componentWillUnmount() {
    console.log('will Unmount');
    // debugger;
  }

  handleUpdateInput = searchText => {
    this.setState({ searchCompany: searchText });
  };
  // handleSubmit is a property that receives the event.
  handleSubmit = event => {
    event.preventDefault();
    //read the value that the user typed
    console.log(this.state.searchCompany);
  };

  render() {
    return (
      <div>
        <h1>
          i am a beer page <GoBeer />
        </h1>
      </div>
    );
  }
}

export default SearchCompanies;
