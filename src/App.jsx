import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<h1>Hello world</h1>
			</ThemeProvider>
		</QueryClientProvider>
	);
};
export default App;
