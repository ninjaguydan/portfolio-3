const Project = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <div className="content">
        <img
          src={props.image}
          alt={`responsive layout for ${props.title} application`}
        />
        <div className="desc">
          <div className="icons">
            {props.icons.length !== 0 &&
              props.icons.map((icon) => (
                <img
                  src={icon}
                  alt={`${icon} logo`}
                />
              ))}
          </div>
          <p>{props.desc}</p>
          <div className="btn-container">
            <a
              href={props.project_link}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Project
            </a>
            {props.code && (
              <a
                href={props.code}
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
