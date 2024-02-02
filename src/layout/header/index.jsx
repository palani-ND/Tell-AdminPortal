/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import Sidebar from '../sidebar';
import { Context } from '../../context';
import { PageHeader } from '../../elements/textStyles';

const Header = () => {
	const isSmallScreen = useMediaQuery('(max-width:960px)');
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { selectedTitle } = useContext(Context);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
			<AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
				<Toolbar>
					{isSmallScreen && (
						<IconButton
							size="large"
							edge="start"
							aria-label="open drawer"
							sx={{ mr: 1, color: 'GrayText', fontWeight: 'bold' }}
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>
					)}

					<PageHeader>{selectedTitle}</PageHeader>
					<Box sx={{ flexGrow: 1 }} />
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
