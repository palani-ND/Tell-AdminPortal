/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const CustomDataGrid = ({ data, column }) => {




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
				columns={column}
				getRowId={(row) =>  row._id}
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
