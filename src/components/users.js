import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { usePrevious } from '../helpers/utility';
import styles from '../styles/users.style';
import UserCard from './userCard';
import UserDetails from './userDetails';

const Users = ({ classes }) => {
	const [userData, updateUsers] = useState([]);
	const [page, updatePage] = useState(1);
	const [selectedUser, setUser] = useState({});
	const [filters, updateFilters] = useState({});

	const fetchUsers = () => {
		let queryParam = '';
		Object.keys(filters).forEach(filter => {
			queryParam += `&${filter}=${filters[filter]}`;
		});
		fetch(`https://randomuser.me/api/?page=${page || 1}&results=5${queryParam}`)
			.then(rsp => {
				if (rsp.status === 200) {
					rsp.json().then(data => {
						if (queryParam && page === 0) {
							updateUsers(data.results);
							updatePage(1);
						} else {
							updateUsers(state => [...state, ...data.results]);
						}
					});
				}
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const prevPage = usePrevious(page);
	useEffect(() => {
		if (!!prevPage && page !== prevPage) fetchUsers();
		if (page === 0) fetchUsers();
	}, [page]);

	const toggleUserDetails = user => setUser(user);

	const handleFilterUpdate = (name, value) => {
		updateFilters(state => ({ ...state, [name]: value }));
	};

	return (
		<div className={classes.container}>
			<div className={classes.contentContainer}>
				<div className={classes.filterContainer}>
					<div>
						<input
							type="text"
							placeholder="Filter by Gender"
							name="gender"
							className={classes.filterText}
							value={filters.gender}
							onChange={e => handleFilterUpdate(e.currentTarget.name, e.currentTarget.value)}
						/>
						<input
							type="text"
							placeholder="Filter by Nationality"
							name="nat"
							className={classes.filterText}
							value={filters.nationality}
							onChange={e => handleFilterUpdate(e.currentTarget.name, e.currentTarget.value)}
						/>
					</div>
					<div>
						<button type="button" className={classes.btnFilter} onClick={() => updatePage(0)}>
							Filter
						</button>
					</div>
				</div>
				<div className={classes.userContainer}>
					{userData.map(user => (
						<UserCard key={user.email} data={user} callback={toggleUserDetails} />
					))}
				</div>
			</div>

			<div className={classes.btnParent}>
				<button type="button" className={classes.btnLoad} onClick={() => updatePage(state => state + 1)}>
					Load more
				</button>
			</div>
			{Object.keys(selectedUser).length ? <UserDetails data={selectedUser} callback={toggleUserDetails} /> : null}
		</div>
	);
};

Users.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Users);
