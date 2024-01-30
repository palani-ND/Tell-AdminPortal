import { Typography } from '@mui/material';
import styled from 'styled-components';

export const PageHeader = styled(Typography)({
	'&&&': {
		color: '#9367AE',
		fontSize: '29px',
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
});

export const ModelHeader = styled(Typography)({
	'&&&': {
		color: 'grey',
		fontSize: '34px',
		fontWeight: 'bold',
	},
});

export const ParagraphBold = styled(Typography)({
	'&&&': {
		color: 'grey',
		fontSize: '22px',
		fontWeight: '400',
	},
});

export const SubHeader = styled(Typography)({
	'&&&': {
		color: '#4C4B4D',
		fontSize: '19px',
		fontWeight: '600',
		lineHeight: '50px',
	},
});

export const Content = styled(Typography)({
	'&&&': {
		color: 'grey',
		fontSize: '20px',
		fontWeight: '600',
		lineHeight: '30px',
		textAlign: 'start',
	},
});

export const SmallBoldText = styled(Typography)({
	'&&&': {
		fontSize: '18px',
		fontWeight: '600',
		lineHeight: '28px',
		textAlign: 'start',
		// textTransform: 'capitalize',
		// letterSpacing: '1px',
	},
});

export const ContentText = styled(Typography)({
	'&&&': {
		fontSize: '18px',
		fontWeight: '600',
		lineHeight: '30px',
		color: '#4C4B4D',
		textAlign: 'center',
	},
});

export const PrimaryTextMedium = styled(Typography)({
	'&&&': {
		color: '#9367AE',
		fontSize: '20px',
		fontWeight: 'bold',
	},
});
