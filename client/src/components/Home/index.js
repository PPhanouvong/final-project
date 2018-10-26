import React from 'react';
import "./style.css";
import MyFooter from './../Footer';
import MyContainer from './../Container';
import TypeWriter from './../TypeWriter';


const Home = (props) =>{
	return (
		<div>
			<h1>You should only see this if you are logged in!</h1>
			<p>{props.auth.username}</p>
			<button onClick = {props.handleLogout}>Log Out</button>
		
		<div class='container'>
			<header>
				<TypeWriter />

			</header>

			<main>
				<MyContainer />

			</main>
		
		</div>
			<MyFooter />
		</div>
	);
};

export default Home;