/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { PageHeader } from '../../elements/textStyles';
import Transition from '../../components/transition';
import Sidebar from '../sidebar/index';
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
					<Transition animate={selectedTitle}>
						<PageHeader>{selectedTitle}</PageHeader>
					</Transition>
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
