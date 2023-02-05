import React from "react";
import "../styles/Header.css";
import kollydap from "../assets/Nifemi.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
// import GitHubIcon from '@mui/icons-material/GitHub';
function Header() {
  return (
    <div className="header">
      <div className="header__text-box">
        <div className="social-img">
          <div className="socials">
            {/* <LinkedInIcon
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/oladapo-kolawole-osagie-864315185/")
              }
            /> */}
            {/* <FacebookIcon
              onClick={() =>
                (window.location.href =
                  "https://web.facebook.com/profile.php?id=100074142968612")
              }
            /> */}
            <GitHubIcon
              onClick={() =>
                (window.location.href = "https://github.com/NifemiOladapo")
              }
            />
            {/* <TwitterIcon
              onClick={() =>
                (window.location.href = "https://twitter.com/kollydapp")
              }
            /> */}
          </div>
          <img src={kollydap} alt=" kollydap" />
        </div>
        <div className="heading-primary">
          <strong>Oladapo Nifemi Osareme</strong>
          <h3>Software Developer</h3>
          <p className="aboutt">
            Hello! I am Oladapo Osareme. A Software developer and engineer with
            experience in developing robust and result driven applications with
            expertise in web development and design, mobile applications. I
            develop web applications using ReactJs, NodeJs(ExpressJs) and
            MongoDb(MERN) with other web technologies like Pusher, Socket Io. I
            have also worked with firebase for user authentication and database
            management.I work comfortably with database and other web
            technologies. I build well funtional, robust, and scalable web
            application with MERN. I build mobile applications with the use of
            React Native. I basically choose the best tools for the project at
            hand. I can work with distributed team, i work comfortably in an
            Agile -driven environment and remotely. I have great communication
            skills which has helped me relate with clients directly and
            converting their project vision to robust and efficient
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
