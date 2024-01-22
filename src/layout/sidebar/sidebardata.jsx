import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Sidebardata = [
	{
		title: 'Home',
		icon: <RoofingOutlinedIcon />,
		link: '/dashboard',
	},
	{
		title: 'Dashboard',
		icon: <DashboardOutlinedIcon />,
		link: '/employee',
	},
	{
		title: 'User',
		icon: <PeopleOutlinedIcon />,
		link: '/myprofile',
	},
	{
		title: 'Question & Answer',
		icon: <DescriptionOutlinedIcon />,
		link: '/project',
	},
	{
		title: 'Settings',
		icon: <SettingsOutlinedIcon />,
		link: '/accounting',
	},
];
