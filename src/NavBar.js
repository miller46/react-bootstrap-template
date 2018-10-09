import React, { Component } from 'react'
import * as Bootstrap from 'react-bootstrap'

class NavBar extends Component {
	render() {
		return <Bootstrap.Navbar>
			<Bootstrap.Navbar.Header>
				<Bootstrap.Navbar.Brand>
					<a href="#home">React-Bootstrap</a>
				</Bootstrap.Navbar.Brand>
			</Bootstrap.Navbar.Header>
			<Bootstrap.Nav>
				<Bootstrap.NavItem eventKey={1} href="#">
					Link
				</Bootstrap.NavItem>
				<Bootstrap.NavItem eventKey={2} href="#">
					Link
				</Bootstrap.NavItem>
				<Bootstrap.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<Bootstrap.MenuItem eventKey={3.1}>Action</Bootstrap.MenuItem>
					<Bootstrap.MenuItem eventKey={3.2}>Another action</Bootstrap.MenuItem>
					<Bootstrap.MenuItem eventKey={3.3}>Something else here</Bootstrap.MenuItem>
					<Bootstrap.MenuItem divider />
					<Bootstrap.MenuItem eventKey={3.4}>Separated link</Bootstrap.MenuItem>
				</Bootstrap.NavDropdown>
			</Bootstrap.Nav>
		</Bootstrap.Navbar>;
	}
}

export default NavBar;
