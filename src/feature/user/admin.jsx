import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomDataGrid from '../../components/table';
import SearchIcon from '@mui/icons-material/Search';
import { getAdmin } from './user.api';

const Admin = () => {
	const cloumn = [
		{
			field: 'fullName',
			headerName: 'fullName',
			width: 300,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'email',
			headerName: 'email',
			width: 300,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'phoneNumber',
			headerName: 'phoneNumber',
			width: 300,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		// {
		// 	field: 'level',
		// 	headerName: 'level',
		// 	width: 160,
		// 	// flex: 1,
		// 	headerAlign: 'center',
		// 	align: 'center',
		// },
		{
			field: 'isActive',
			headerName: 'Active',
			width: 250,
			// flex: 1,
			headerAlign: 'center',
			align: 'center',
		},
		// {
		// 	field: 'totalApplicationTime',
		// 	headerName: 'TotalApplicationTime',
		// 	width: 160,
		// 	// flex: 1,
		// 	headerAlign: 'center',
		// 	align: 'center',
		// },
	];

	const [currentPage, setCurrentPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [values, setValue] = useState('');

	const { data, isLoading } = getAdmin(currentPage, pageSize, values);

	const handlePageChange = (params) => {
		// console.log(params);
		if (pageSize !== params.pageSize) {
			setPageSize(params.pageSize);
		}
		if (currentPage !== params.page) {
			setCurrentPage(params.page);
		}
	};

	const pageSizeChange = (params) => {
		setPageSize(params.pageSize);
	};

	const handleSearchChange = (event) => {
		const inputValue = event.target.value;
		setValue(inputValue);
	};

	return (
		<>
			<Grid
				item
				width={'100%'}
				rowGap={2}
				flexDirection={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				display={'flex'}
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
					onPageSizeChange={pageSizeChange}
					pageSize={pageSize}
					rowCount={
						data?.responseObj?.responseDataParams?.data?.totalAdmins
							? data?.responseObj?.responseDataParams?.data?.totalAdmins
							: 0
					}
					data={
						data?.responseObj?.responseDataParams?.data?.admins
							? data?.responseObj?.responseDataParams?.data?.admins
							: []
					}
				/>
			</Grid>
		</>
	);
};

export default Admin;
