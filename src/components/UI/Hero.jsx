import React from "react";
import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";
import lightImg from "../../images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  // 부드러운 스크롤 이동 함수
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // 기본 동작 방지

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const location = targetElement.offsetTop;
      window.scrollTo({
        top: location - 80, // 추가적인 오프셋 값
        behavior: "smooth", // 부드러운 스크롤 효과 적용
      });
    }
  };

  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Creating Perfect </h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue.
            </p>

            <div className="hero__btns">
              <button
                className="primary__btn"
                onClick={(e) => handleScroll(e, "newsletter")} // 클릭 시 부드럽게 스크롤
              >
                Get Started Now
              </button>
              <button
                className="secondary__btn"
                onClick={(e) => handleScroll(e, "about")}
              >
                Discover More
              </button>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
