import header from '../images/header.png';

const styles = {
	header: {
		padding: 50,
		marginBottom: 30,
		position: 'sticky',
		top: 0,
		backgroundColor: 'aliceblue',
		zIndex: 5,
		borderBottom: '1px solid #0079c1',
		backgroundImage: `url(${header})`,
		transition: '0.1s',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '0px -125px'
	},
	headerName: {
		position: 'relative',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, 150%)',
		width: 350,
		textAlign: 'center',
		padding: 10,
		borderRadius: 25,
		backgroundColor: 'white',
		border: '1px solid #0079c1',
		textTransform: 'uppercase',
		color: '#0079c1',
		margin: 0,
		boxSizing: 'border-box'
	}
};

export default styles;
