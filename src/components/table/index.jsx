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
			headerAlign: 'center',
			align:'center',
			width: 220,
			// flex: 1,
		},
		{
			field: 'Phone',
			headerName: 'Phone',
			width: 200,
			// flex: 1,
			headerAlign: 'center',
			align:'center',
		},
		{
			field: 'Department',
			headerName: 'Department',
			width: 300,
			// flex: 1,
			headerAlign: 'center',
			align:'center',
		},
		{
			field: 'Level',
			headerName: 'Level',
			width: 150,
			headerAlign: 'center',
			align:'center',
		},
		{
			field: 'Attempts',
			headerName: 'Attempt',
			width: 150,
			headerAlign: 'center',
			align:'center',
		},
		{
			field: 'Status',
			headerName: 'Status',
			width: 150,
			headerAlign: 'center',
			align:'center',
		},
	];

	return (
		<Box>
			<Paper
				style={{
					width: '100%',
					boxShadow: 300,
					height: '60vh',
					borderRadius: '10px',
				}}
			>
				<DataGrid
					columnHeaderHeight={60}
					rowHeight={50}
					disableColumnFilter={true}
					disableColumnMenu={true}
					disableRowSelectionOnClick={true}
					rows={data}
					columns={columns}
					sx={{
						fontSize: '16px',
						'& .MuiDataGrid-columnHeader': {
							borderRadius: '10px',
						},
						'& .MuiDataGrid-columnHeaderTitle': {
							fontWeight: 'bold',
							color: '#808080',
							fontSize:'18px',
						},
					}}
				/>
			</Paper>
		</Box>
	);
};

export default UserDataTable;
