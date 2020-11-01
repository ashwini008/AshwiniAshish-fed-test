const styles = {
	container: {
		margin: '0 auto'
	},
	filterContainer: {
		border: '1px solid lightgrey',
		height: 75,
		margin: 'auto',
		marginBottom: 20,
		width: '77vw',
		position: 'sticky',
		top: 0,
		zIndex: 10,
		display: 'flex',
		alignItems: 'center',
		padding: '5px 10px',
		justifyContent: 'space-between',
		backgroundColor: '#f7f7f7'
	},
	filterText: {
		padding: 10,
		borderRadius: 5,
		border: '1px solid lightgray',
		fontStyle: 'italic',
		marginRight: 10
	},
	btnFilter: {
		color: 'white',
		border: '1px solid #00468b',
		borderRadius: 5,
		textTransform: 'uppercase',
		padding: 10,
		width: 100,
		cursor: 'pointer',
		backgroundColor: '#00468b'
	},
	btnReset: {
		color: '#00468b',
		border: '1px solid #00468b',
		borderRadius: 5,
		textTransform: 'uppercase',
		padding: 10,
		width: 100,
		cursor: 'pointer',
		backgroundColor: 'white',
		marginRight: 5
	},
	userContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '77vw',
		margin: 'auto',
		zIndex: 10,
		flexDirection: 'column',
		alignContent: 'center',
		'@media (max-width: 980px)': {
			justifyContent: 'space-evenly'
		}
	},
	btnParent: {
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		margin: '15px 0'
	},
	btnLoad: {
		textTransform: 'uppercase',
		padding: '10px 40px',
		cursor: 'pointer',
		backgroundColor: '#00468b',
		border: '2px solid #00468b',
		borderRadius: '5px',
		color: 'white',
		width: 300,
		transition: 'all .3s ease',
		'&:hover': {
			border: '2px solid #00468b',
			backgroundColor: 'white',
			color: '#00468b',
			fontWeight: 'bold'
		},
		'@media (max-width: 600px)': {
			width: '90vw'
		}
	}
};

export default styles;
