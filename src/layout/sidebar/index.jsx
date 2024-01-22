import { Typography } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div style={{ width: '100%' }}>
			<Typography
				variant="h3"
				fontWeight={'800'}
				style={{
					color: '#FFFFFF',
					letterSpacing: '1px',
					display: 'flex',
					justifyContent: 'center',
					textAlign: 'center',
					alignItems: 'center',
					backgroundColor: 'gray',
					height: '120px',
				}}
			>
				Tell
			</Typography>
			{Sidebardata.map((item, index) => {
				return (
					<NavLink
						to={item.link}
						key={index}
						style={{
							display: 'flex',
							color: 'rgb(61, 60, 60)',
							padding: '10px 15px',
							gap: '15px',
							marginTop: '10px',
							textDecoration: 'none',
							// backgroundColor: 'green',
						}}
						activeStyle={{ color: '#A6B50C' }}
					>
						<div
							style={{
								fontSize: '18px',
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
