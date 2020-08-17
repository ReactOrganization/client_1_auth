import React from 'react';
import { useFormik } from 'formik'
import axios from 'axios'



function Signup() {
	const formik = useFormik({
		initialValues: {
			name: '',
			password: ''
		},
		onSubmit: async values => axios.post(`http://localhost:4000/signup`, values)
		.then(res => {
			console.log(res.status);
		}, e => e.message.includes('409') && alert('username exist'))
	})
	return (
			<form onSubmit={formik.handleSubmit}>
				<label>email</label>
				<input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>

				<label>password</label>
				<input
					id='password'
					name='password'
					type='password'
					onChange={formik.handleChange}
					value={formik.values.password
					}
				/>
				<button type='submit'>Submit</button>

			</form>
	);
}

export default Signup;
