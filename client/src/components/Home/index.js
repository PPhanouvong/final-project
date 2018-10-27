import React from 'react';
import "./style.css";
import MyFooter from './../Footer';
import MyContainer from './../Container';
import TypeWriter from './../TypeWriter';


const Home = (props) =>{
	return (
		<div id='_home'>
			<h1 id='_header'>Operator Intel</h1>
			<p id='_username'>{props.auth.username}</p>
			<button id='_logout' onClick = {props.handleLogout}>Log Out</button>
		
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