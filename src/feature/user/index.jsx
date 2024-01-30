/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import UserDataTable from '../../components/table/index';
// import UserForm from './userform';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import Popup from 'reactjs-popup';

const App = () => {
	const [open, setOpen] = useState(false);
	const userData = [
		{
			id: '1',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '2',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '3',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '4',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '5',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '6',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '7',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '8',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
	];

	const handleAddUserClick = () => {
		setOpen(true);
	};

	// const handleUserFormClose = () => {
	// 	setOpen(false);
	// };

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		border: '1px solid #D1C9D6',
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		width: '100%',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
		},
	}));

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexWrap:'wrap',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: '30px',
					rowGap:'10px'
				}}
			>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase placeholder="Search…" />
				</Search>
				<PrimaryButton onClick={handleAddUserClick}>Add new User</PrimaryButton>
			</div>
			<UserDataTable data={userData} />
		</>
	);
};

export default App;
