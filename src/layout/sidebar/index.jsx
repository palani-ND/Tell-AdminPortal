/* eslint-disable no-unused-vars */
import { Accordion, AccordionDetails, AccordionSummary, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';
import logo from '../../asset/image/logo.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Sidebar = () => {
	const location = useLocation();
	const { setSelectedTitle } = useContext(Context);
	const handleNavLinkClick = (title) => {
		setSelectedTitle(title);
	};
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		localStorage.removeItem('token');
		navigate('/');
		localStorage.clear();
	};
	return (
		<div style={{ width: '100%' }}>
			<Stack width={'100%'} py={'10px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>
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
							padding: item.isSubData == false && '14px 5px',
							marginTop: '1px',
							gap: item.isSubData == false && '10px',
							textDecoration: 'none',
							backgroundColor: item.link === location.pathname ? '#E9E0EE' : '',
							color: item.link === location.pathname ? '#9367AE' : 'grey',
						}}
					> {item.isSubData == true ?

							<Accordion elevation={0} sx={{ backgroundColor: 'white', width: '100%', padding: 0 }}>
								<AccordionSummary sx={{ width: '100%', padding: 0, px: 0.5 }}
									expandIcon={<ArrowDropDownIcon />}
								>
									<Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: 'grey', display: 'flex', width: '47%', justifyContent: 'space-between', alignItems: 'center' }}>{item.icon} {item.title}</Typography>
								</AccordionSummary>
								<AccordionDetails sx={{ padding: 0, fontSize: '18px', fontWeight: 'bolder' }}>
									<List sx={{ fontSize: '18px', fontWeight: 'bolder' }}>
										<ListItemButton>
											<ListItemIcon >
												<HelpOutlineIcon />
											</ListItemIcon>
											<Typography
												style={{
													fontSize: '16px', fontWeight: 'bold', color: 'grey',whiteSpace:'nowrap'
												}}
											>
											Question & answer
											</Typography>
										</ListItemButton>
										<ListItemButton>
											<ListItemIcon>
												<DriveFolderUploadIcon />
											</ListItemIcon>
											<Typography
												style={{
													fontSize: '17px', fontWeight: 'bold', color: 'grey'
												}}
											>
											Upload file
											</Typography>
										</ListItemButton>
									</List>


								</AccordionDetails>
							</Accordion>
							:
							<>
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
										fontWeight: 'bold'
									}}
								>
									{item.title}
								</div>
							</>

						}

					</NavLink>
				);
			})}




			<NavLink
				onClick={() => handleLogoutClick()}
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					padding: '14px 5px',
					marginTop: '1px',
					gap: '10px',
					textDecoration: 'none',
					color: 'grey', bottom: 0
				}}
			>
				<div
					style={{
						fontSize: '20px',
						width: '15%',
					}}
				>
					<ExitToAppIcon />
				</div>
				<div
					style={{
						fontSize: '18px',
						width: '85%',
						fontWeight: 'bold'
					}}
				>Logout</div>
			</NavLink>

		</div>
	);
};

export default Sidebar;
