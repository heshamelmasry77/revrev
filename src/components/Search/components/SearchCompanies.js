import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import data from '../../../testData.json';
import RaisedButton from 'material-ui/RaisedButton';

console.log(data);

class SearchCompanies extends Component {
  // we can use this also
  state = {
    pageHeader: 'Naming me ',
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

  onSubmit = formData => {
    alert(formData);
  };
  render() {
    return (
      <div>
        {/*<form onSubmit={this.onSubmit}>*/}
        <form>
          <AutoComplete
            floatingLabelText="Type 'company name',  revrev search"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.state.contests.map(function(item) {
              return item.categoryName;
            })}
            maxSearchResults={5}
            onUpdateInput={this.handleUpdateInput.bind(this)}
          />
          <RaisedButton
            type="button"
            label="Search"
            className="button-submit"
            primary={true}
            onClick={this.handleSearch}
          />
        </form>
      </div>
    );
  }

  handleUpdateInput = searchText => {
    console.log(searchText);
    this.setState({ searchCompany: this.state.searchText });
  };
  handleSearch = searchedCompany => {
    console.log(searchedCompany);
  };
}

export default SearchCompanies;
