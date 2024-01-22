import React, { useState } from 'react';
import {
	ListItemIcon,
	Menu,
	MenuItem,
	Grid,
	Stack,
	Tooltip,
	// Chip,
	Paper,
	MenuList,
	ListItemText,
	IconButton,
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const BigScreenMenu = () => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuType, setMenuType] = useState('');
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuClick = (event, type) => {
		setAnchorEl(event.currentTarget);
		setMenuType(type);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setMenuType('');
	};

	const handleLogoutClick = () => {
		localStorage.removeItem('token');
		navigate('/');
		localStorage.clear();
		handleClose();
	};

	return (
		<Grid
			sx={{ display: 'flex', flexDirection: 'row', columnGap: '30px', alignItems: 'center' }}
		>
			<Stack>
				<Tooltip title="Profile" arrow>
					<IconButton
						sx={{ boxShadow: 1 }}
						color="primary"
						aria-label="account of current user"
						aria-haspopup="true"
						onClick={(e) => handleMenuClick(e, 'account')}
					>
						<AccountCircleTwoToneIcon color="secondary" sx={{ color: '#FFFFFF' }} />
					</IconButton>
				</Tooltip>

				<Menu
					anchorEl={anchorEl}
					keepMounted
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					open={isMenuOpen && menuType === 'account'}
					onClose={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 38,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
				>
					<Paper sx={{ width: 150 }} elevation={0}>
						<MenuList dense sx={{ p: 0 }}>
							<MenuItem onClick={() => handleLogoutClick()}>
								<ListItemIcon>
									<ExitToAppIcon size="small" />
								</ListItemIcon>
								<ListItemText>
									<span
										style={{
											fontWeight: 'bold',
											letterSpacing: '1px',
											color: 'grey',
										}}
									>
										Logout
									</span>
								</ListItemText>
							</MenuItem>
						</MenuList>
					</Paper>
				</Menu>
			</Stack>
		</Grid>
	);
};

export default BigScreenMenu;
