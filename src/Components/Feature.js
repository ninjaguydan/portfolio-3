import dexapp from '../media/mockups/Dexapp.png'

const Feature = () => {
	return (
		<article style={{"background-color":"var(--gray2)"}}>
			<h3>Dex App</h3>
			<img src={dexapp} alt="responsive layout for Dexapp application" />
			<div className="icons">

			</div>
			<p>
				A web application that allows users to find and follow new friends, leave reviews for one or more of 898 Pokemon, search or filter Pokemon by type and/or generation, and build custom teams that showcase dynamic strengths and weaknesses based on the Pokemon who make up the team. All backend and frontend/ graphic design done by me. Check out the live project! 
			</p>
		</article>
	)
}

export default Feature
