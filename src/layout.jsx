import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import Sidebar from './layout/sidebar';
import Header from './layout/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	const isSmallScreen = useMediaQuery('(max-width:960px)');
	return (
		<Grid container direction="row" width="100%" flexWrap="nowrap">
			<Grid
				item
				xs={0}
				sm={0}
				md={2}
				lg={2}
				sx={{
					display: isSmallScreen ? 'none' : 'flex',
					backgroundColor: '#F9F6EE',
					width: '20%',
					borderRight: '3px  solid #9367AE',
				}}
			>
				<Sidebar />
			</Grid>

			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={10}
				container
				direction="column"
				width="80%"
				flexWrap="nowrap"
			>
				<Grid>
					<Header />
				</Grid>

				<Grid sx={{ padding: '20px' }}>
					<Outlet />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Layout;
