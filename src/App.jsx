import { Grid, ThemeProvider } from '@mui/material';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Context } from './context';
import { theme } from './theme';
import { routes } from './route';
import Loader from './components/loader';

const App = () => {
	const queryClient = new QueryClient();
	const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });
	const [selectedTitle, setSelectedTitle] = useState(localStorage.getItem('title'));

	return (
		<Grid>
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
