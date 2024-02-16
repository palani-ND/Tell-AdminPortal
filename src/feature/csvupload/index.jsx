
import React, { useState } from 'react';
import { uploadFileToBackend } from './questionUplpad.api';
import { Grid } from '@mui/material';
import Transition from '../../components/transition';
import CustomDataGrid from '../../components/table';

const CsvUpload = () => {
	const [file, setFile] = useState(null);

	const handleFileUpload = async (e) => {
		const selectedFile = e.target.files[0];
		const response = await uploadFileToBackend(selectedFile);
		setFile(response);
	};

	const cloumn = ['answer', 'question', 'scenario', '_id'];
	return (
		<Grid container width={'100%'} flexDirection={'column'} rowGap={3}>

			<Grid item
				width={'100%'}
				flexWrap={'wrap'}
				alignItems={'center'}
				justifyContent={'space-between'}
				display={'flex'}
			>
				<form>
					<label>
						input file
						<input type="file" hidden onChange={handleFileUpload} />
					</label>
				</form>
			</Grid>

			{file !== null &&
				<Transition animate={file}>
					<Grid item width={'100%'} rowGap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
						<CustomDataGrid cloumn={cloumn} data={file} />
					</Grid>
				</Transition>
			}
		</Grid>


	);
};

export default CsvUpload;




