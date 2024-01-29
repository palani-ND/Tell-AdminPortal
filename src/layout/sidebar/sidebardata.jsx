import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Sidebardata = [
	
	{
		title: 'Dashboard',
		icon: <DashboardOutlinedIcon />,
		link: '/dashboard',
	},
	{
		title: 'User',
		icon: <PeopleOutlinedIcon />,
		link: '/user',
	},
	{
		title: 'Question & Answer',
		icon: <DescriptionOutlinedIcon />,
		link: '/quizans',
	},
	{
		title: 'Settings',
		icon: <SettingsOutlinedIcon />,
		link: '/settings',
	},
];
