/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const CustomDataGrid = ({ data,cloumn }) => {


	const columns = cloumn.map((data) => {
		const obj = {
			field: data,
			headerName: data,
			headerAlign: 'left',
			align: 'left',
			flex: 1,
		};
		return obj;
	});

	return (
		<Paper elevation={9}
			style={{
				width: '100%',
				height: '62vh',
				borderRadius: '10px',
			}}
		>
			<DataGrid
				columnHeaderHeight={66}
				rowHeight={45}
				disableColumnFilter={true}
				disableColumnMenu={true}
				disableRowSelectionOnClick={true}
				rows={data}
				columns={columns}
				sx={{
					fontSize: '16px',
					'& .MuiDataGrid-columnHeaderTitle': {
						fontWeight: 'bold',
						color: '#664879',
						fontSize: '18px',
						textTransform: 'capitalize'
					},
				}}
			/>
		</Paper>
	);
};

export default CustomDataGrid;
