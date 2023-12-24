import { FaGithub } from "react-icons/fa";

const Portfolio_section = () => {
  return (
    <div className="container portfolio">
      <div className="portfolio_section section">
        <div className="typogh">
          <h1 className="title">Projects Portfolio</h1>
          <p className="desc">
            Best Personal Project Portfolio Website with some web tech
          </p>
        </div>
        <div className="project">
          <div className="project_box">
            <div className="project_box-images">
              <div className="cover">
                <img src="/Images/Projects-cover-1.png" alt="" />
              </div>
              <div className="project-images">
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="image">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="project_box-desc">
              <h1 className="project-title">Portfolio Website</h1>
              <p className="project-description">
                Hi I’m Faqih a Junior Developer, as A junior developer, I am so
                excited about technology to create website like Html, Css, sass
                , tailwindcss, Javascript, Reactjs, redux-
              </p>
              <div className="project-technologies">
                <h2>Tech</h2>
                <div className="tech">
                  <div className="tech-list">
                    <img src="/Images/Html.png" alt="" />
                  </div>
                  <div className="tech-list">
                    <img src="/Images/Css.png" alt="" />
                  </div>
                  <div className="tech-list">
                    <img src="/Images/Js.png" alt="" />
                  </div>
                  <div className="tech-list">
                    <img src="/Images/Sass.png" alt="" />
                  </div>
                  <div className="tech-list">
                    <img src="/Images/React.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="project-details">
                {/* Code */}
                <button className="btn btn-code">
                  <a href="/">Code</a>
                  <FaGithub />
                </button>
                {/* Live Demo */}
                <button className="btn-transparent btn-live">
                  <a href="/">Live Demo</a>
                </button>
              </div>
            </div>
          </div>
          <div className="load-more">
            <button className="btn">
              <a href="/">Load More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_section;
