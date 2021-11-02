import './css/App.css';
import { useState } from 'react';
//Components
import Frame from './Components/Frame';
import Logo from './Components/Logo';
import MenuBtn from './Components/MenuBtn';
import Project from './Components/Project';
import Illustration from './Components/Illustration';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
//Mockups
import dexapp from './media/mockups/Dexapp.png'
import ng from './media/mockups/NG.png'
import aarc from './media/mockups/AARC.png'
import dt from './media/mockups/DT.png'
//Icons
import react from './media/icons/react.svg'
import py from './media/icons/python.svg'
import django from './media/icons/django.svg'
import jquery from './media/icons/jquery.svg'
import wp from './media/icons/wordpress.svg'

function App() {

	const [isActive, setActive] = useState('false')
	function menuToggle() {
		setActive(!isActive)
	}

	return (
		<>
			<MenuBtn menuToggle={menuToggle} isActive={isActive} />
			<Menu isActive={isActive} menuToggle={menuToggle} />
			<Logo />
			<section className="gray nav" />
			<header id="projects">
				<h1>Daniel Thompson</h1>
				<h2>User Interface Engineer &#9733; Designer</h2>
			</header>
			<Project bg="gray" title="Dex App" image={dexapp} icons={[react, py, django]} desc={descriptions.dexapp} project_link="https://dexapp-dt.herokuapp.com/" code="https://github.com/ninjaguydan/dex_react" />
			<Project bg="null" title="Ninja Gold" image={ng} icons={[py, django, jquery]} desc={descriptions.ninja} project_link="https://ninja-gold-dt.herokuapp.com/" code="https://github.com/ninjaguydan/ninja-gold" />
			<Project bg="gray" title="African American Research Collaborative" image={aarc} icons={[wp, jquery]} desc={descriptions.aarc} project_link="https://africanamericanresearch.us/" code={null} />
			<Project bg="null" title="Portfolio Site" image={dt} icons={[react]} desc={descriptions.dt} project_link="/" code="https://github.com/ninjaguydan/portfolio-3" />
			<Illustration />
			<About />
			<Contact />
			<Frame />
		</>
	);
}

let descriptions = {
	"dexapp" : "A web application that allows users to find and follow new friends, leave reviews for one or more of 898 Pokemon, search or filter Pokemon by type and/or generation, and build custom teams that showcase dynamic strengths and weaknesses based on the Pokemon who make up the team. All backend and frontend/ graphic design done by me. Check out the live project!",
	"ninja" : "A simple, luck-based game built with Python. It's basically blackjack on steroids. All backend and frontend/ graphic design done by me. Check out the live project, and try to get 100 coins in 10 turns without going over!",
	"aarc" : "Made for a client committed to bringing an accurate understanding of African American civic engagement to the public discourse.",
	"dt" : "My fifth attempt at building a portfolio site, this time done completely with React.js. No backend needed for this project, but once again all front end and graphic design done by me!",
}

export default App;
