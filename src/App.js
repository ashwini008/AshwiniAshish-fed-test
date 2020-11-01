import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Users from './components/users';
import styles from './styles/app.style';

const App = ({ classes }) => {
	return (
		<>
			<header id="navbar" className={classes.header}>
				<h2 className={classes.headerName}>Employee List</h2>
			</header>
			<Users />
		</>
	);
};

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
