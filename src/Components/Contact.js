import gh from '../media/icons/gh.svg'
import li from '../media/icons/li.svg'
import ig from '../media/icons/ig.svg'
import tw from '../media/icons/tw.svg'

const Contact = () => {
	return (
		<article className="contact" id="contact">
			<h3>Let's Connect!</h3>
			<div className="info">
				<h4>Contact</h4>
				<p>Atlanta, GA</p>
				<p>dthompson0190@gmail.com</p>
			</div>
			<div className="info">
				<h4>Social</h4>
				<div className="icons">
					<a href="https://github.com/ninjaguydan" target="_blank"><img src={gh} alt="github logo" /></a>
					<a href="https://www.linkedin.com/in/dthompson0190/" target="_blank"><img src={li} alt="linkedin logo" /></a>
					<a href="https://www.instagram.com/ninjaguydan/" target="_blank"><img src={ig} alt="instagram logo" /></a>
					<a href="https://twitter.com/NinjaGuyDan_" target="_blank"><img src={tw} alt="twitter logo" /></a>
				</div>
			</div>
		</article>
	)
}

export default Contact
