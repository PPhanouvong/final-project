import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {
	return (
		<div id='_signin'>
			<h1>Enter Planning Phase (Login)</h1>
			<Link to = "/signup">Operator Enlistment (Sign Up)</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button id='_submit' type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
	);
};

export default SignIn;