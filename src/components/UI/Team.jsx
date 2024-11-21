import React from "react";

import "../../styles/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Sunil Kim",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Hyoan Moon",
    position: "Web Developer",
  },
  {
    imgUrl: team03,
    name: "Courtny Hurry",
    position: "Product Manager",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">out team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="imgUrl" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-x-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
