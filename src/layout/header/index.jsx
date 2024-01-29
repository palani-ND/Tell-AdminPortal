/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, Typography, useMediaQuery } from '@mui/material';
import BigScreenMenu from './pcmenu';
import Sidebar from '../sidebar';
import { Context } from '../../context';

const Header = () => {
	const isSmallScreen = useMediaQuery('(max-width:960px)');
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { selectedTitle } = useContext(Context);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					{isSmallScreen && (
						<IconButton
							size="large"
							edge="start"
							aria-label="open drawer"
							sx={{ mr: 1, color: 'inherit' }}
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>
					)}
					{/* <Typography
						variant="h4"
						fontWeight={'800'}
						style={{
							color: '#FFFFFF',
							letterSpacing: '1px',
						}}
						sx={{
							display: { sm: 'block', xs: 'block', md: 'none' }, // Show on small screens
						}}
					>
						Tell
					</Typography> */}

					<Typography variant="h6">{selectedTitle}</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							textAlign: 'center',
							justifyContent: 'center',
							columnGap: { md: '60px', sm: '10px' },
						}}
					>
						<BigScreenMenu />
					</Box>
				</Toolbar>
			</AppBar>
			{isSmallScreen && (
				<Drawer open={isDrawerOpen} onClose={toggleDrawer} onClick={toggleDrawer}>
					<div style={{ width: '200px' }}>
						<Sidebar />
					</div>
				</Drawer>
			)}
		</>
	);
};

export default Header;
