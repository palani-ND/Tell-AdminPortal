/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import { Box, Grid, Paper, Tab, Tabs } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Transition from '../../components/transition';
import Nurse from './nurse';
import Admin from './admin';

const User = () => {
	const [isNurse, setIsNurse] = useState(1);

	const handleChange = (event, newValue) => {
		setIsNurse(newValue);
	};

	return (
		<Grid container width={'100%'} flexDirection={'column'} rowGap={3}>
			<Grid
				item
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

				{isNurse == 2 && (
					<Transition animate={isNurse}>
						<PrimaryButton>
							<AddIcon /> Add admin
						</PrimaryButton>
					</Transition>
				)}
			</Grid>
			<Box sx={{ width: '100%', overflowX: 'auto', height: '100%' }}>
				<Paper elevation={5}>
					<Transition animate={isNurse}>
						{isNurse === 1 ? <Nurse /> : <Admin />}
					</Transition>
				</Paper>
			</Box>
		</Grid>
	);
};

export default User;
