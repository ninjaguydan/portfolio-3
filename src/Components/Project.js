import react from '../media/icons/react.svg'
import py from '../media/icons/python.svg'

const Feature = (props) => {

	return (
		<article className={props.bg}>
			<h3>{props.title}</h3>
			<img src={props.image} alt={`responsive layout for ${props.title} application`} />
			<div className="icons">
				{props.icons.map(icon => {
					if (icon.includes("react")) {
						return <img src={react} alt="react logo" />
					}
					if (icon.includes("python")) {
						return <img src={py} alt="python logo" />
					}
					if (icon.includes("django")) {
						return <img src={icon} style={{"width":"3.5rem"}} alt="django logo" />
					}
					if (icon.includes("wordpress")) {
						return <img src={icon} style={{"width":"8rem"}} alt="wordpress logo" />
					}
					if (icon.includes("jquery")) {
						return <img src={icon} style={{"width":"4.5rem"}} alt="jquery logo" />
					}
					else {
						return null
					}
				})}
				
			</div>
			<p>{props.desc}</p>
			<div className="btn-container">
				<a href={props.project_link} className="btn btn-primary" target="_blank">Live Project</a>
				{ props.code && <a href={props.code} className="btn btn-secondary" target="_blank">View Code</a> }
			</div>
		</article>
	)
}

export default Feature
