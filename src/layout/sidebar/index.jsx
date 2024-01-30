/* eslint-disable no-unused-vars */
import { ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import logo from '../../asset/image/logo.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AlertDialog from '../../components/logoutmodel';

const Sidebar = () => {
	const location = useLocation();
	const { setSelectedTitle } = useContext(Context);
	const handleNavLinkClick = (title) => {
		setSelectedTitle(title);
	};

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/');
		localStorage.clear();
		setIsDialogOpen(false);
	};

	const handleClose = () => {
		setIsDialogOpen(false);
	};

	return (
		<div
			style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
		>
			<div style={{ flex: 1, overflowY: 'auto' }}>
				<Stack
					width={'100%'}
					py={'10px'}
					justifyContent={'center'}
					display={'flex'}
					alignItems={'center'}
				>
					<img
						style={{
							width: '80%',
						}}
						src={logo}
						alt="Image"
					/>
				</Stack>
				{Sidebardata.map((item, index) => {
					return (
						<NavLink
							to={item.link}
							key={index}
							onClick={() => handleNavLinkClick(item.title)}
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								padding: '14px 5px',
								marginTop: '1px',
								gap: '10px',
								textDecoration: 'none',
								backgroundColor: item.link === location.pathname ? '#E9E0EE' : '',
								color: item.link === location.pathname ? '#9367AE' : 'grey',
							}}
						>
							<div
								style={{
									fontSize: '20px',
									width: '15%',
								}}
							>
								{item.icon}
							</div>
							<div
								style={{
									fontSize: '18px',
									width: '85%',
									fontWeight: 'bold',
								}}
							>
								{item.title}
							</div>
						</NavLink>
					);
				})}
			</div>

			<div
				style={{
					borderTop: '1px solid #ccc',
				}}
			>
				<ListItemButton
					onClick={() => setIsDialogOpen(true)}
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						padding: '14px 5px',
						marginTop: '2px',
						gap: '20px',
					}}
				>
					<ListItemIcon
						sx={{
							fontSize: '20px',
							minWidth: '0px',
						}}
					>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText
						disableTypography
						sx={{
							color: 'grey',
							fontSize: '18px',
							fontWeight: 'bold',
							margin: '0',
						}}
					>
						Logout
					</ListItemText>
				</ListItemButton>
				<AlertDialog
					open={isDialogOpen}
					handleConfirm={handleLogout}
					handleClose={handleClose}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
