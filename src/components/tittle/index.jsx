/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import React from 'react';

const TellTittle = () => {
	return (
		<Typography variant="h5" fontWeight={'800'} component="div" sx={{ flexGrow: 1 }}>
			<div style={{ fontSize: '17px' }}>
				<span
					style={{
						letterSpacing: '1px',
					}}
				>
					"Speak like me ..." "Speak with me ..."
				</span>
			</div>
		</Typography>
	);
};

export default TellTittle;
