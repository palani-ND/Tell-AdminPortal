import { Box, Paper } from '@mui/material';
import React from 'react';

const Dashboard = () => {
	return (
		<>
			<Box>
				<Paper
					sx={{
						display: 'flex',
						alignItems:'center',
						justifyContent: 'center',
						height: '150px',
						borderRadius: '10px',
						fontSize:'18px'
					}}
					elevation={5}
				>
					Upload your csv file 
				</Paper>
			</Box>
		</>
	);
};

export default Dashboard;
