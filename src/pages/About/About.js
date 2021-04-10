import React, { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";
import './about.css'
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

function First() {
  return (
    <div>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <div className="team-section">
        <div className="inner-width">
          <h2>Meet our team</h2>
          <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="rafeh" />
              <div className="p-name">Joe Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">
                {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="rafeh" />
              <div className="p-name">Anna Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">
                {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="rafeh" />
              <div className="p-name">Dominic Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">
                {/* <a href="#"><i className="  fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default First;
