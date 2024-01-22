/* eslint-disable no-unused-vars */
import {
	Navigate,
	Outlet,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Header from './layout/header/index';
import Sidebar from './layout/sidebar/index';

const ProtectedRoute = () => {
	const isSmallScreen = useMediaQuery('(max-width:960px)');
	const isAuthenticated = localStorage.getItem('token') ? true : false;
	return (
		<>
			{isAuthenticated === true ? (
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
							width: '100%',
							minHeight:'100vh'
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
						width="100%"
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
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};

const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home/index'));
const Dashboard = lazy(() => import('./feature/dashboard/index'));

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route>
				<Route path="/" element={<Login />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/home" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Route>
		</>
	)
);
