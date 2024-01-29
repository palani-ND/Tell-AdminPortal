/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const UserDataTable = ({ data }) => {
	const columns = [
		{
			field: 'name',
			headerName: 'Name',
			width: 200,
		},
		{
			field: 'Phone',
			headerName: 'Phone',
			width: 200,
		},
		{
			field: 'Department',
			headerName: 'Department',
			width: 200,
		},
		{
			field: 'Level',
			headerName: 'Level',
			width: 200,
		},
		{
			field: 'Attempts',
			headerName: 'Attempt',
			width: 200,
		},
		{
			field: 'Status',
			headerName: 'Status',
			width: 160,
		},
	];

	return (
		<Box>
			<Paper
				style={{
					width: '100%',
					padding: '5px',
					boxShadow: '4px 6px 11px -3px rgba(0,0,0,0.66)',
				}}
			>
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={10}
					sx={{ m: 1, fontSize: '17px' }}
				/>
			</Paper>
		</Box>
	);
};

export default UserDataTable;
