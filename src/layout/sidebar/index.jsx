/* eslint-disable no-unused-vars */
import { Typography } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';
import Logo from '../../asset/image/logo.png';
const Sidebar = () => {
	const location = useLocation();
	const { setSelectedTitle } = useContext(Context);
	const handleNavLinkClick = (title) => {
		setSelectedTitle(title);
	};
	return (
		<div style={{ width: '100%' }}>
			<img
				style={{
					width: '100%',
					justifyContent:'center',
				}}
				src={Logo}
				alt="Image"
			/>

			{Sidebardata.map((item, index) => {
				return (
					<NavLink
						to={item.link}
						key={index}
						onClick={() => handleNavLinkClick(item.title)}
						style={{
							display: 'flex',
							padding: '20px 5px',
							marginTop: '1px',
							gap: '15px',
							textDecoration: 'none',
							backgroundColor: item.link === location.pathname ? '#E9E0EE' : '',
							color: item.link === location.pathname ? '#9367AE' : 'black',
						}}
					>
						<div
							style={{
								fontSize: '20px',
								flex: '30%',
								display: 'grid',
								justifyContent: 'center',
								textAlign: 'center',
							}}
						>
							{item.icon}
						</div>
						<div
							style={{
								fontSize: '18px',
								flex: '70%',
								justifyContent: 'left',
							}}
						>
							{item.title}
						</div>
					</NavLink>
				);
			})}
		</div>
	);
};

export default Sidebar;
