import { Button } from '@mui/material';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)({
	'&&&': {
		padding: '0px 30px',
		backgroundColor: '#9367AE',
		borderRadius: '10px',
		fontSize: '15px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#ffffff',
		height: '40px',
		'&:hover': {
			backgroundColor: '#a885be',
			color: '#e5e5e5',
		},
		textTransform: 'none',
	},
});

export const SecondaryButton = styled(Button)({
	'&&&': {
		padding: '13px 30px',
		// backgroundColor: '#E0DBE6',
		border: '1px solid #9367AE ',
		borderRadius: '10px',
		fontFamily: 'Poppins',
		fontSize: '15px',
		fontWeight: '700',
		textAlign: 'center',
		color: '#808080',
		height: '40px',
		'&:hover': {
			backgroundColor: '#CA9BE6',
			color: '#ffffff',
		},
		textTransform: 'capitalize',
	},
});
