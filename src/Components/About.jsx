import me from "../media/images/me.png";
import resume from "../media/download/daniel_thompson_resume_v20.pdf";

const About = () => {
  return (
    <article id="about">
      <h3>About</h3>
      <div className="about-content">
        <img
          src={me}
          alt="daniel signing artwork"
          className="about-img"
        />
        <div className="about-txt-btn">
          <div className="about-txt">
            <p>
              I'm a Front End Engineer from Jackson, MS with an extensive background in art and design. Not only do I enjoy
              building things, but I enjoy making them look good! Skilled in solving problems with semantic HTML, CSS,
              Typescript, React and Figma with an emphasis on accessibility. I think understanding the human experience is
              essential for creating useful and effective products that make life easier for everyone, and I enjoy using my
              skill-set to empower people to accomplish their goals.
            </p>
            <p>
              You can check some of the other projects I've built{" "}
              <a
                href="https://github.com/ninjaguydan"
                target="_blank"
                rel="noreferrer">
                here.
              </a>{" "}
              And if you're interested in seeing more of my artwork, check me out on social media!
            </p>
          </div>
          <div className="btn-container">
            <a
              href={resume}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Or Hire Me
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
