import React from "react";
import "../../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Let's work</h6>
            <h2>
              Explore the <span className="highlight">hidden</span> ideas and
              subscribe!
            </h2>
          </div>

          <div className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="secondary__btn subscribe__btn">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
