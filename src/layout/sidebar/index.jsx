/* eslint-disable no-unused-vars */
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../asset/image/logo.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AlertDialog from '../../components/logoutmodel/index';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
	const location = useLocation();
	const [open, setOpen] = useState(true);
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
						<>
							{item.isSubData === false ? (
								<>
									<NavLink
										to={item.link}
										key={index}
										style={{
											display: 'flex',
											justifyContent: 'space-around',
											alignItems: 'center',
											padding: item.isSubData == false && '14px 10px',
											marginTop: '1px',
											gap: item.isSubData == false && '10px',
											textDecoration: 'none',
											backgroundColor:
												item.link === location.pathname ? '#E9E0EE' : '',
											color:
												item.link === location.pathname
													? '#9367AE'
													: 'grey',
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
								</>
							) : (
								<>
									<List sx={{padding:0}}>
										<ListItemButton 
											sx={{
												width: '100%', px: 0.5,py:1.7,
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
											}}
											onClick={() => setOpen(!open)}>
										
											<Typography
												sx={{
													fontWeight: 'bold',
													fontSize: '18px',
													color: 'grey',
													display: 'flex',
													width: '43%',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												{item.icon} {item.title}
											</Typography>

											{open ? <ExpandLess /> : <ExpandMore />}
										</ListItemButton>
										<Collapse in={open} timeout="auto" unmountOnExit>
											<List  disablePadding>
												<ListItemButton 

													onClick={() => navigate(item.link[0])}
												>
													<ListItemIcon>
														<HelpOutlineIcon />
													</ListItemIcon>
													<Typography
														style={{
															fontSize: '16px',
															fontWeight: 'bold',
															color: 'grey',
															whiteSpace: 'nowrap',
														}}
													>
														Question & answer
													</Typography>
												</ListItemButton>
												<ListItemButton
													onClick={() => navigate(item.link[1])}
												>
													<ListItemIcon>
														<DriveFolderUploadIcon />
													</ListItemIcon>
													<Typography
														style={{
															fontSize: '17px',
															fontWeight: 'bold',
															color: 'grey',
														}}
													>
														Upload file
													</Typography>
												</ListItemButton>
											</List>
										</Collapse>
									</List>
								</>
							)}
						</>
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
