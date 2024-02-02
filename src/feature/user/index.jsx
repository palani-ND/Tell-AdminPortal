/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import UserDataTable from '../../components/table/index';
const App = () => {
	const [open, setOpen] = useState(false);
	const userData = [
		{
			id: '1',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '2',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '3',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '4',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '5',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '6',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '7',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
		{
			id: '8',
			name: 'John Doe',
			Phone: '123-456-7890',
			Department: 'Cardiology',
			Level: 'level1',
			Attempts: 3,
			Status: 'Active',
		},
	];

	const handleAddUserClick = () => {
		setOpen(true);
	};

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: '30px',
					rowGap: '10px',
				}}
			>
				<PrimaryButton onClick={handleAddUserClick}>Add new User</PrimaryButton>
			</div>
			<UserDataTable data={userData} />
		</>
	);
};

export default App;
