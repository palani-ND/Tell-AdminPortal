// import { headerWithToken } from '../../api';



export const uploadFileToBackend = async (file) => {
	try {
		const formData = new FormData();
		formData.append('file', file);
		// const response = await headerWithToken.post('/admin/bulkQA', formData);
		// if (!response.ok) {
		// 	throw new Error('File upload failed');
		// }
		const data = [
			{
				question: 'Good morning,How can I help you today?',
				answer: 'Hi, I would like to schedule an appointment with a doctor.',
				department: ['Generic'],
				level: 1,
				scenario: 'During Appointment',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863a',
				__v: 0
			},
			{
				question: 'Hi, I\'m scheduled for surgery next week, and I have some questions about the preparation.',
				answer: 'Of course. I\'ll be happy to help. What specific information do you need regarding your surgery preparation',
				department: ['Generic'],
				level: 1,
				scenario: 'Pre Surgery',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863b',
				__v: 0
			},
			{
				question: 'Good afternoon! How are you feeling today after your surgery?',
				answer: 'Hi, I\'m feeling a bit sore, but I\'m okay. I have some questions about my post-surgery care.',
				department: ['Generic'],
				level: 1,
				scenario: 'Post Surgery',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863c',
				__v: 0
			},
			{
				question: 'Have you been here before, or will this be your first visit to our department?',
				answer: 'This will be my first visit. What should I do now ?',
				department: ['Generic'],
				level: 2,
				scenario: 'During Appointment',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863d',
				__v: 0
			},
			{
				question: 'Your surgeon might have given specific instructions about your medication. Have they advised you to continue taking it before the surgery?',
				answer: 'I was instructed to take it with a small sip of water, as usual.',
				department: ['Generic'],
				level: 2,
				scenario: 'Pre Surgery',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863e',
				__v: 0
			},
			{
				question: 'It\'s crucial to follow those instructions carefully. Are you experiencing any unusual pain, bleeding, or discomfort?',
				answer: 'No, just some expected soreness around the surgical site.',
				department: ['Generic'],
				level: 2,
				scenario: 'Post Surgery',
				createdBy: 'Palani',
				_id: '65bccf379679feb98824863f',
				__v: 0
			}
		];
		return data;

	} catch (error) {
		// Handle errors
		return error;
	}
};