const Menu = ({isActive, menuToggle}) => {
	return (
		<nav className={isActive ? "hidden" : null}>
			<ul>
				<li><a href="#projects" onClick={() => menuToggle()}>Projects</a></li>
				<li><a href="#art" onClick={() => menuToggle()}>Illustration</a></li>
				<li><a href="#about" onClick={() => menuToggle()}>About</a></li>
				<li><a href="#contact" onClick={() => menuToggle()}>Contact</a></li>
			</ul>
		</nav>
	)
}

export default Menu
