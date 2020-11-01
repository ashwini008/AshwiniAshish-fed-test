const styles = {
	cardContainer: {
		border: '1px solid rgb(48 64 81)',
		width: '50%',
		margin: 10,
		borderRadius: 10,
		boxSizing: 'content-box',
		transition: 'all .3s ease',
		backgroundColor: 'white',
		zIndex: 5,
		display: 'flex',
		'&:hover': {
			transform: 'scale(1.05)'
		},
		'@media (max-width: 1200px)': {
			width: '80%'
		},
		'@media (max-width: 600px)': {
			width: '100%'
		}
	},
	cardContact: {
		padding: 20,
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		height: 90,
		'@media (max-width: 600px)': {
			width: '100%',
			boxSizing: 'border-box',
			height: 'auto'
		}
	},
	imgWrapper: {
		backgroundColor: '#304051',
		position: 'relative',
		borderRadius: '10px 0 0 10px',
		width: 100
	},
	imgHolder: {
		borderRadius: '50%',
		padding: 2,
		backgroundColor: 'white',
		position: 'absolute',
		top: '5%',
		left: '47%'
	},
	textHolder: {
		display: 'flex',
		flexDirection: 'column',
		width: 'calc(100% - 100px)'
	},
	userImg: {
		borderRadius: '50%',
		height: 90,
		width: 90,
		border: '1px solid #304051',
		padding: 2,
		verticalAlign: 'middle '
	},
	profileContents: {
		color: '#6b6b6b',
		fontFamily: 'sans-serif',
		padding: '20px 40px 10px',
		textAlign: 'center',
		height: 85,
		'& p:nth-child(1)': {
			fontWeight: 'bold',
			fontSize: '18px'
		},
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
	imgNav: {
		width: 17,
		height: 17,
		marginRight: 2,
		verticalAlign: 'middle'
	},
	btnDetails: {
		width: '100%',
		border: 0,
		borderTop: '1px solid rgb(48 64 81)',
		padding: '12px 10px',
		textTransform: 'uppercase',
		color: 'rgb(48 64 81)',
		backgroundColor: 'white',
		borderRadius: '0 0 10px 10px',
		cursor: 'pointer'
	}
};

export default styles;
