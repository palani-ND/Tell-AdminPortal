import { TextField } from '@mui/material';
import React from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';

const Userform = () => {
	return (
		<form>
			<TextField label="Name" variant="outlined" fullWidth margin="normal" />
			<TextField label="Phone" variant="outlined" fullWidth margin="normal" />
			<TextField label="Department" variant="outlined" fullWidth margin="normal" />
			<TextField label="Level" variant="outlined" fullWidth margin="normal" />
			<TextField label="Attempt" variant="outlined" fullWidth margin="normal" />
			<TextField label="Status" variant="outlined" fullWidth margin="normal" />

			<PrimaryButton variant="contained" color="primary" type="submit">
				Submit
			</PrimaryButton>
		</form>
	);
};

export default Userform;
