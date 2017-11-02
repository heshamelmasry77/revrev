import React, { Component } from 'react';

// when called will dynamically import a given component.
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }
    // we simply call the importComponent function that is passed in.
    // And save the dynamically loaded component in the state
    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }
    // we conditionally render the component if it has completed loading.
    // If not we simply render null. But instead of rendering null
    //todo could render a loading spinner. This would give the user some feedback while a part of your app is still loading
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
