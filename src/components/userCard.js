import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from '../styles/userCard.style';
import { dateFormatter } from '../helpers/utility';
import nav from '../images/nav.png';

const UserCard = ({ classes, data, callback }) => (
	<div className={classes.cardContainer}>
		<div className={classes.imgWrapper}>
			<div className={classes.imgHolder}>
				<img src={data.picture.medium} alt="No-profile" className={classes.userImg} />
			</div>
		</div>
		<div className={classes.textHolder}>
			<div className={classes.profileContents}>
				<p>{`${data.name.title} ${data.name.first} ${data.name.last}`}</p>
				<p>{`${data.gender}, ${dateFormatter(data.dob.date)}`}</p>
				<p>
					<img src={nav} alt="nav" className={classes.imgNav} />
					{`${data.location.city}, ${data.location.country}`}
				</p>
			</div>
			<button type="button" className={classes.btnDetails} onClick={() => callback(data)}>
				View Profile
			</button>
		</div>
	</div>
);

UserCard.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
	callback: PropTypes.func.isRequired
};

export default injectSheet(styles)(UserCard);
