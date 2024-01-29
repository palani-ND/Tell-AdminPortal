/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';
import logo from '../../asset/image/logo.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
								fontWeight: 'bold'
							}}
						>
							{item.title}
						</div>
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
