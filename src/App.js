import './css/App.css';
import Frame from './Components/Frame';
import Logo from './Components/Logo';
import MenuBtn from './Components/MenuBtn';
import Feature from './Components/Feature';

function App() {
	return (
		<>
			<MenuBtn />
			<Logo />
			<section className="gray nav" />
			<header>
				<h1>Daniel Thompson</h1>
				<h2>User Interface Engineer &#9733; Designer</h2>
			</header>
			<Feature />
			<Frame />
		</>
	);
}

export default App;
