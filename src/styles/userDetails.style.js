const styles = {
	overlay: {
		position: 'fixed',
		zIndex: 20,
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	btnClose: {
		position: 'absolute',
		right: 11,
		top: 11,
		color: 'white',
		border: '1px solid white',
		borderRadius: '50%',
		padding: '3px 6px',
		cursor: 'pointer',
		background: '0 0',
		'&:hover': {
			fontWeight: 'bold',
			boxShadow: '0 0 5px white'
		}
	},
	cards: {
		display: 'flex',
		width: 700,
		height: '75vh',
		overflow: 'auto',
		fontFamily: 'sans-serif',
		zIndex: 30,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		'@media (max-width: 600px)': {
			width: '90%',
			flexDirection: 'column'
		}
	},
	cardRight: {
		display: 'flex',
		flexDirection: 'column',
		width: 350,
		'@media (max-width: 600px)': {
			width: '100%'
		}
	},
	cardLeft: {
		width: 350,
		'@media (max-width: 600px)': {
			width: '100%'
		}
	},
	cardContainer: {
		border: '1px solid grey',
		borderRadius: 10,
		boxSizing: 'content-box',
		zIndex: 30,
		backgroundColor: 'white',
		color: '#6b6b6b',
		margin: 10
	},
	cardHeader: {
		borderBottom: '1px solid #245d9a',
		color: '#245d9a',
		textTransform: 'uppercase',
		textAlign: 'center'
	},
	cardContact: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		height: 175,
		'@media (max-width: 600px)': {
			width: '100%',
			boxSizing: 'border-box',
			height: 'auto'
		}
	},
	imgWrapper: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#245d9a',
		height: 175,
		alignItems: 'center',
		position: 'relative',
		borderRadius: '10px 10px 0 0'
	},
	imgHolder: {
		borderRadius: '50%',
		padding: 2,
		backgroundColor: 'white',
		position: 'absolute',
		top: '35%'
	},
	userImg: {
		borderRadius: '50%',
		height: 150,
		width: 150,
		border: '1px solid #245d9a',
		padding: 2,
		verticalAlign: 'middle '
	},
	profileContents: {
		padding: '55px 40px 10px',
		textAlign: 'center',
		height: 165,
		'& p:nth-child(2)': {
			textTransform: 'capitalize'
		},
		'& p:nth-child(3)': {
			fontStyle: 'italic'
		},
		'& *': {
			margin: '5px 0'
		}
	},
	credsContainer: {
		backgroundColor: '#245d9a',
		color: 'white',
		padding: 1,
		cursor: 'pointer',
		borderRadius: '0 0 10px 10px',
		textAlign: 'center',
		'& p:nth-child(2)': {
			display: 'none'
		},
		'& p:nth-child(1)': {
			display: 'block'
		},
		'&:hover p:nth-child(2)': {
			display: 'block'
		},
		'&:hover p:nth-child(1)': {
			display: 'none'
		}
	},
	addrContents: {
		padding: 20,
		textAlign: 'center',
		'& p': {
			marginTop: 0
		}
	},
	contactContents: {
		padding: 20,
		'& p': {
			display: 'flex',
			justifyContent: 'space-between'
		},
		'& p span:nth-child(2)': {
			fontStyle: 'italic',
			borderBottom: '1px solid #d6d6d6'
		}
	},
	imgNav: {
		width: 17,
		height: 17,
		marginRight: 2,
		verticalAlign: 'middle'
	},
	imgNav2: {
		width: 20,
		height: 20
	}
};

export default styles;
