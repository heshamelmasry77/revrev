import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import data from '../../../testData.json';

console.log(data);

//example to add react icons
//
// const colors = [
//   'Red',
//   'Orange',
//   'Yellow',
//   'Green',
//   'Blue',
//   'Purple',
//   'Black',
//   'White',
// ];
//
// const fruit = [
//   'Apple',
//   'Apricot',
//   'Avocado',
//   'Banana',
//   'Bilberry',
//   'Blackberry',
//   'Blackcurrant',
//   'Blueberry',
//   'Boysenberry',
//   'Blood Orange',
//   'Cantaloupe',
//   'Currant',
//   'Cherry',
//   'Cherimoya',
//   'Cloudberry',
//   'Coconut',
//   'Cranberry',
//   'Clementine',
//   'Damson',
//   'Date',
//   'Dragonfruit',
//   'Durian',
//   'Elderberry',
//   'Feijoa',
//   'Fig',
//   'Goji berry',
//   'Gooseberry',
//   'Grape',
//   'Grapefruit',
//   'Guava',
//   'Honeydew',
//   'Huckleberry',
//   'Jabouticaba',
//   'Jackfruit',
//   'Jambul',
//   'Jujube',
//   'Juniper berry',
//   'Kiwi fruit',
//   'Kumquat',
//   'Lemon',
//   'Lime',
//   'Loquat',
//   'Lychee',
//   'Nectarine',
//   'Mango',
//   'Marion berry',
//   'Melon',
//   'Miracle fruit',
//   'Mulberry',
//   'Mandarine',
//   'Olive',
//   'Orange',
//   'Papaya',
//   'Passionfruit',
//   'Peach',
//   'Pear',
//   'Persimmon',
//   'Physalis',
//   'Plum',
//   'Pineapple',
//   'Pumpkin',
//   'Pomegranate',
//   'Pomelo',
//   'Purple Mangosteen',
//   'Quince',
//   'Raspberry',
//   'Raisin',
//   'Rambutan',
//   'Redcurrant',
//   'Salal berry',
//   'Satsuma',
//   'Star fruit',
//   'Strawberry',
//   'Squash',
//   'Salmonberry',
//   'Tamarillo',
//   'Tamarind',
//   'Tomato',
//   'Tangerine',
//   'Ugli fruit',
//   'Watermelon',
// ];

class AutoCompleteExampleFilters extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {test: 42};
  // }
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

  render() {
    return (
      <div>
        {/*<AutoComplete*/}
        {/*floatingLabelText="Type 'r', case insensitive"*/}
        {/*filter={AutoComplete.caseInsensitiveFilter}*/}
        {/*dataSource={colors}*/}
        {/*/>*/}
        {/*<br/>*/}
        <AutoComplete
          floatingLabelText="Type 'peah', fuzzy search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.contests.map(function(item) {
            // console.log(item.categoryName);
            // const boy = [];
            // boy.push(item.categoryName);
            // // boy = item.categoryName;
            // console.log(boy);
            return item.categoryName;
          })}
          maxSearchResults={5}
        />
      </div>
    );
  }
}

// to slice one contest from state from the the console
// $r.setState({contests: $r.state.contests.slice(1)});
export default AutoCompleteExampleFilters;
