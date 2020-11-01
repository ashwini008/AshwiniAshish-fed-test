import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from '../styles/userDetails.style';
import { dateFormatter } from '../helpers/utility';
import nav from '../images/nav.png';

const UserDetails = ({ classes, data, callback }) => (
	<div className={classes.overlay}>
		<button type="button" className={classes.btnClose} onClick={() => callback({})}>
			x
		</button>
		<div className={classes.cards}>
			<div className={classes.cardLeft}>
				<div className={classes.cardContainer}>
					<div className={classes.imgWrapper}>
						<div className={classes.imgHolder}>
							<img src={data.picture.large} alt="No-profile" className={classes.userImg} />
						</div>
					</div>
					<div className={classes.profileContents}>
						<p>{`${data.name.title} ${data.name.first} ${data.name.last}`}</p>
						<p>{`${data.gender}, ${dateFormatter(data.dob.date)}`}</p>
						<p>Nationality: {data.nat}</p>
						<p>ID: {data.id.name || 'NA'}</p>
					</div>
					<div className={classes.credsContainer}>
						<p>Credentials</p>
						<p>{`${data.login.username} / ${data.login.password}`}</p>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className={classes.cardRight}>
				<div className={classes.cardContainer}>
					<div className={classes.cardHeader}>
						<h4>
							<img src={nav} alt="nav" className={classes.imgNav2} /> Address
						</h4>
					</div>
					<div className={classes.addrContents}>
						<p>{`${data.location.street.number} ${data.location.street.name}`}</p>
						<p>{`${data.location.city} - ${data.location.postcode}`}</p>
						<p>{`${data.location.state}, ${data.location.country}`}</p>
					</div>
					{/* </div> */}
				</div>
				<div className={classes.cardContainer}>
					<div className={classes.cardHeader}>
						<h4>Contact</h4>
					</div>
					<div className={classes.contactContents}>
						<p>
							<span>Email:</span> <span>{data.email}</span>
						</p>
						<p>
							<span>Cell:</span> <span>{data.cell}</span>
						</p>
						<p>
							<span>Phone:</span> <span>{data.phone}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

UserDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
	callback: PropTypes.func.isRequired
};

export default injectSheet(styles)(UserDetails);
