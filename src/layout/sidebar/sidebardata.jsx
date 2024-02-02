import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Sidebardata = [
	{
		title: 'Dashboard',
		icon: <DashboardOutlinedIcon />,
		link: '/dashboard',
		isSubData: false,
	},
	{
		title: 'User',
		icon: <PeopleOutlinedIcon />,
		link: '/user',
		isSubData: false,
	},
	{
		title: 'Q & A',
		icon: <DescriptionOutlinedIcon />,
		link: '/question_and_answer',
		isSubData: true,
	},
	{
		title: 'Settings',
		icon: <SettingsOutlinedIcon />,
		link: '/settings',
		isSubData: false,
	},
];
