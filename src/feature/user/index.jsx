/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import CustomDataGrid from '../../components/table/index';
// import UserForm from './userform';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Grid, IconButton, InputAdornment, Tab, Tabs, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from '../../components/transition';


const App = () => {
	const [isNurse, setIsNurse] = useState(2);

	const handleChange = (event, newValue) => {
		setIsNurse(newValue);
	};

	const cloumn = ['name', 'Phone', 'Department', 'Level', 'Status', 'Attempts'];

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

	return (
		<Grid container width={'100%'} flexDirection={'column'} rowGap={3}>

			<Grid item
				width={'100%'}
				flexWrap={'wrap'}
				alignItems={'center'}
				justifyContent={'space-between'}
				display={'flex'}
			>
				<Box>
					<Tabs
						value={isNurse}
						onChange={handleChange}
						textColor="primary"
						indicatorColor="primary"
						aria-label="primary tabs example"
					>
						<Tab
							value={1}
							sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
							label="Nurses"
						/>
						<Tab
							value={2}
							sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
							label="Admins"
						/>
					</Tabs>
				</Box>
				{isNurse == 2 &&
					<Transition animate={isNurse}>
						<PrimaryButton><AddIcon />  Add admin</PrimaryButton>
					</Transition>
				}

			</Grid>
			<Transition animate={isNurse}>



				<Grid item width={'100%'} rowGap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
					<TextField sx={{ alignSelf: 'flex-start' }}
						variant='outlined'
						size='small'
						placeholder="Search…"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}} />

					<CustomDataGrid cloumn={cloumn} data={userData} />

				</Grid>
			</Transition>

		</Grid>
	);
};

export default App;
