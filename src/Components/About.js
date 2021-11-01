import me from "../media/images/me.png"
import resume from "../media/download/daniel_thompson_resume_v14.pdf"

const About = () => {
	return (
		<article>
			<h3>About</h3>
			<img src={me} alt="daniel signing artwork" className="about-img" />
			<p>
				I'm a UI Engineer from Jackson, MS with an extensive background in art and design. Not only do I enjoy building things, but I enjoy making them look good! Skilled in solving problems with HTML, CSS, Javascript, Python, Django and React. I think understanding the human experience is essential for creating useful and effective products that make life easier for everyone, and I enjoy using my skill-set to empower people to accomplish their goals.
			</p>
			<p>
				You can check some of the other projects I've built <a href="https://github.com/ninjaguydan" target="_blank">here.</a> And if you're interested in seeing more of my artwork, check me out on social media!
			</p>
			<div className="btn-container">
			<a href={resume} className="btn btn-primary" target="_blank">Or Hire Me</a>
			</div>
		</article>
	)
}

export default About
