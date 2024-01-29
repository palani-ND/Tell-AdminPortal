import { Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route';
import { Suspense, useState } from 'react';
import Loader from './components/loader';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Context } from './context';

const App = () => {
	const queryClient = new QueryClient();
	const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });
	const [selectedTitle, setSelectedTitle] = useState('');

	return (
		<Grid
			sx={{
				height: '97.60vh',
				width: '100%',
			}}
		>
			<Suspense fallback={<Loader circle={true} load={true} />}>
				<Context.Provider
					value={{
						alert,
						setAlert,
						selectedTitle,
						setSelectedTitle,
					}}
				>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<RouterProvider router={routes} />
						</ThemeProvider>
					</QueryClientProvider>
				</Context.Provider>
			</Suspense>
		</Grid>
	);
};
export default App;
