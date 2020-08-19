import React, { useState } from 'react';
import { useFormik } from 'formik'
import axios from 'axios'
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Alert, AlertTitle } from '@material-ui/lab'

function Signup() {
	const [alert, setAlert] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			password: ''
		},
		onSubmit: async values => axios.post(`http://localhost:4000/signup`, values)
			.then(res => {
				console.log(res.status);
			}, e => {
				if (e.message.includes('409')) {
					setAlert(true)
					setTimeout(function () { setAlert(false) }, 3000)
				}
			})
	})

	return (
		<>
			{alert &&
				<Alert
					severity="error"
					icon={false}
				>
					<AlertTitle>User exists</AlertTitle>
					<strong>This user name already axists</strong>
				</Alert>}
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
			<div>
				<Link to="/signin">Sign in</Link>
			</div>
		</>
	);
}

export default Signup;
