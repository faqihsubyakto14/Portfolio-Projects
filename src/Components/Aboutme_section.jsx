const Aboutme_section = () => {
  return (
    <div className="container">
      <div className="about_section section">
        {/* Skills */}
        <div className="skills">
          <h1 className="stack">Tech stack</h1>
          <div className="line"></div>
          <div className="skill-required">
            <img src="/Images/Html.png" alt="" />
            <img src="/Images/Css.png" alt="" />
            <img src="/Images/Js.png" alt="" />
            <img src="/Images/Ts.png" alt="" />
            <img src="/Images/Tailwinds.png" alt="" />
            <img src="/Images/Sass.png" alt="" />
            <img src="/Images/React.png" alt="" />
            <img src="/Images/Nextjs.png" alt="" />
            <img src="/Images/Mern.png" alt="" />
          </div>
        </div>
        {/* About Me */}
        <div className="about section">
          <div className="typogh">
            <h1 className="title">About Me</h1>
            <p className="desc">
              Dedicated Web developer | Frontend-developer | MERN Developer
            </p>
          </div>
          <div className="about_content">
            <div className="cover">
              <img src="/Images/About-image-1.png" alt="" />
            </div>
            <div className="description">
              <p>
                Hi I’m Faqih a Junior Developer, as A junior developer, I am so
                excited about technology to create website like Html, Css, sass
                , tailwindcss, Javascript, Reactjs, redux-toolkit, NextJs, And
                popular tech stack like MERN(MongoDb, ExpressJs, ReactJs,
                Nodejs), and i am also have skill in order to write clean code,
                SEO optimization and make responsive website that easily to use.
              </p>
              <button className="btn">
                <a href="">Let Discuss</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme_section;
