import React, { useState, useContext } from 'react';
import { useFormik } from 'formik'
import axios from 'axios'
import { Redirect, Link } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab'
import { Context } from "../Context";



function Signin() {
	const [alert, setAlert] = useState(false);
	const [user, setUser] = useContext(Context);


	const formik = useFormik({
		initialValues: {
			name: '',
			password: ''
		},
		onSubmit: async values => axios.post(`http://localhost:4000/signin`, values)
			.then(res => {
				console.log(res.status);
				setUser({ ...user, userName: { ...user.userName, name: values.name } })
				setAlert('success')
			}, e => {
				if (e.message.includes('401')) {
					setAlert('error')
					setTimeout(function () { setAlert(false) }, 3000)
				}
			})
	})
	return (
		<>
			{alert && (alert == 'error' &&
				<Alert
					severity="error"
					icon={false}
				>
					<AlertTitle>Password error</AlertTitle>
					<strong>Check your password</strong>
				</Alert>)}
			{user && user.userName && user.userName.name !== '' ?
				<Redirect
					to={{ pathname: "/start" }}
				/> : null}

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
				<Link to="/">Sign up</Link>
			</div>
		</>
	);
}

export default Signin;
