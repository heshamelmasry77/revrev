import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import GoBeer from 'react-icons/lib/go/beer';
import ContestPreview from './ContestPreview';
import data from '../../testData.json';

console.log(data);

//example to add react icons

class Test extends Component {
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
      <div className="Test">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My test page</title>
          <meta name="description" content="Helmet test" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p>
          i am beer page <GoBeer />
        </p>
        <div>
          {this.state.contests.map(contest => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}
// to slice one contest from state from the the console
// $r.setState({contests: $r.state.contests.slice(1)});
export default Test;
