import { FaGithub, FaLinkedin } from "react-icons/fa";
<FaGithub />;
const Intro_section = () => {
  return (
    <div className="container intro">
      <div className="intro_section section">
        <div className="left-intro">
          <div className="intro-content">
            <h1 className="title">
              Mern stack | Front-end <br /> ReactJs Developer
            </h1>
            <p className="desc">
              Hi I’m Faqih Subyakto. A Passionate with MERN and Front-end
              ReactJS Developer From Pangandaran | Indonesia
            </p>
          </div>
          <div className="profile-icons">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
          <button className="btn btn-intro">
            <a href="">More Project</a>
          </button>
        </div>
        <div className="right-intro">
          <img src="/Images/Intro-image-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro_section;
