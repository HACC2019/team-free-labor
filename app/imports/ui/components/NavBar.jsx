import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        <Menu attached="top" borderless inverted className={'NavBar'} id={'margin-bottom-navbar'}>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image src='https://gems.hawaii.gov/wp-content/uploads/2015/01/GEMS-Logo.png' size='small'></Image>
          </Menu.Item>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
          ) : ''}
          {this.props.currentUser ? (
              [<Menu.Item as={NavLink} activeClassName="active" exact to="/profile" key='profile'>My Loan</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/form/1" key='form1'>My
                  Application</Menu.Item>]
              // <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>List Stuff</Menu.Item>,
              //  <Menu.Item as={NavLink} activeClassName='active' exact to='/authorization'
              //  key='authorization'>Authorization</Menu.Item>]
          ) : ''}

          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="My Profile" as={NavLink} exact to="/profile"/>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
