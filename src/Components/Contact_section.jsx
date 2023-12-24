import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact_section = () => {
  return (
    <div className="container contact">
      <div className="contact_section section">
        <div className="typogh">
          <h1 className="title">Contact</h1>
          <p className="desc">
            Interested About My Skill ?? Message me | Hire me and we will
            discuss, Thanks
          </p>
        </div>
        <div className="contact_information">
          <div className="info">
            <div className="info-icon">
              <FaMapLocation />
            </div>
            <div className="info-desc">
              <h2>Location</h2>
              <span className="details">Pangandaran, Indonesia</span>
            </div>
          </div>
          <div className="info">
            <div className="info-icon">
              <MdOutlineEmail />
            </div>
            <div className="info-desc">
              <h2>Mail</h2>
              <span className="details">faqihdev14@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_section;
