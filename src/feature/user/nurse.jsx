/* eslint-disable no-unused-vars */
import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import CustomDataGrid from '../../components/table';
import SearchIcon from '@mui/icons-material/Search';
import { getNurse } from './user.api';
import { useState } from 'react';
import { wrap } from 'framer-motion';
const Nurse = () => {
	const cloumn = [
		{
			field: 'fullName',
			headerName: 'fullName',
			width: 220,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'email',
			headerName: 'email',
			width: 250,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'phoneNumber',
			headerName: 'phoneNumber',
			width: 220,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'level',
			headerName: 'level',
			width: 160,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'isActive',
			headerName: 'Active',
			width: 160,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'totalApplicationTime',
			headerName: 'TotalApplicationTime',
			width: 160,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
	];
	const [currentPage, setCurrentPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [values, setValue] = useState('');

	const { data, isLoading } = getNurse(currentPage, pageSize, values);

	// const handlePageChange = (params) => {
	// 	setCurrentPage(params.page);
	// 	console.log(params);
	// 	// if (pageSize !== params.pageSize) {
	// 	// 	setPageSize(params.pageSize);
	// 	// }
	// 	// if (currentPage !== params.page) {
	// 	// 	setCurrentPage(params.page);
	// 	// }
	// 	console.log(
	// 		`Calling getNurse with page: ${params.page}, pageSize: ${pageSize}`
	// 	);

	// 	getNurse(params.page, pageSize, values);
	// };

	const handlePageChange = (params) => {
		// console.log(params);
		setCurrentPage(params.page);
		// console.log(` page: ${params.page}, pageSize: ${pageSize}`);
		setPageSize(params.pageSize);
		// console.log(` page: ${params.page}, pageSize: ${params.pageSize}`);
	};

	// const pageSizeDropdown = (params) => {
	// 	console.log(params);
	// 	setPageSize(params.pageSize);
	// 	console.log(
	// 		`currentPage: ${currentPage}, pageSize: ${params.pageSize},`
	// 	); // Debugging
	// };

	const handleSearchChange = (event) => {
		const inputValue = event.target.value;
		setValue(inputValue);
	};

	return (
		<>
			<Box sx={{}}>
				<Grid
					item
					width={'100%'}
					rowGap={2}
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
					display={'flex'}
					flexWrap={wrap}
				>
					<TextField
						sx={{ alignSelf: 'flex-start' }}
						variant="outlined"
						size="small"
						placeholder="Search by mobile number"
						onChange={handleSearchChange}
						value={values}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
					<CustomDataGrid
						isLoading={isLoading}
						cloumn={cloumn}
						onPageChange={handlePageChange}
						// onPageSizeChange={pageSizeDropdown}
						pageSize={pageSize}
						rowCount={
							data?.responseObj?.responseDataParams?.data?.totalUsers
								? data?.responseObj?.responseDataParams?.data?.totalUsers
								: 0
						}
						data={
							data?.responseObj?.responseDataParams?.data?.users
								? data?.responseObj?.responseDataParams?.data?.users
								: []
						}
					/>
				</Grid>
			</Box>
		</>
	);
};

export default Nurse;
