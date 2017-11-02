import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import logo from '../../../../../assets/logos/ReactLogo.svg'; // Tell Webpack this JS file uses this image

const Login = props => (
  <IconMenu
    {...props}
    iconButtonElement={<FlatButton {...this.props} label="Get In" />}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Register" />
    <MenuItem primaryText="Sign in" />
  </IconMenu>
);
Login.muiName = 'FlatButton';

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Sign out" />
    {/*<MenuItem primaryText="Refresh"/>*/}
    <MenuItem primaryText="Help" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

const styles = {
  width: '30px',
  margin: '20px'
};

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarComposition extends Component {
  state = {
    logged: true
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        <AppBar
          title={
            <Toggle
              defaultToggled={true}
              onToggle={this.handleChange}
              labelPosition="right"
              style={styles}
            />
          }
          iconElementLeft={
            <IconButton>
              <img src={logo} className="App-logo" alt="logo" />
            </IconButton>
          }
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}

export default AppBarComposition;
