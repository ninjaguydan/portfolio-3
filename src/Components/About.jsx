import me from "../media/images/me.png";
import resume from "../media/download/daniel_thompson_resume_v20.pdf";
import Illustration from "./Illustration";

const About = () => {
  return (
    <article id="about">
      <h3>About</h3>
      <div className="about-content">
        <img src={me} alt="daniel signing artwork" className="about-img" />
        <div className="about-txt-btn">
          <div className="about-txt">
            <p>
              I'm a Front End Engineer from Jackson, MS with an extensive background in art and design. Not only do I enjoy building things, but I enjoy making them look good! Skilled in solving problems with semantic HTML, CSS, Typescript, React and Figma with an emphasis on accessibility. I think
              understanding the human experience is essential for creating useful and effective products that make life easier for everyone, and I enjoy using my skill-set to empower people to accomplish their goals. You can check some of the other projects I've built{" "}
              <a href="https://github.com/ninjaguydan" target="_blank" rel="noreferrer">
                here.
              </a>
            </p>
            <p>
              Software devs I meet tend to always have things they're into apart from code, and hearing about those hobbies is one of my favorite parts of meeting other devs! As far me, I love to draw! If you're into that and are interested in seeing more of my artwork, check out my work below. I
              can't wait to connect and hear about your interests—both professional and personal!
            </p>
          </div>
          <div className="btn-container">
            <a href={resume} className="btn btn-primary" target="_blank" rel="noreferrer">
              Or Hire Me
            </a>
          </div>
        </div>
      </div>
      <Illustration />
    </article>
  );
};

export default About;
