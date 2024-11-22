// Header.jsx
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const nav__links = [
  {
    path: "/home", // 절대 경로로 변경
    display: "Home",
  },
  {
    path: "/about", // 절대 경로로 변경
    display: "About",
  },
  {
    path: "/services", // 절대 경로로 변경
    display: "Service",
  },
  {
    path: "/projects", // 절대 경로로 변경
    display: "Projects",
  },
  {
    path: "/blog", // 절대 경로로 변경
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // navigate 훅을 사용하여 경로 변경

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  // 부드러운 스크롤 처리
  const handleScroll = (e, path) => {
    e.preventDefault(); // 기본 링크 클릭 동작을 막고

    // 경로 이동 (페이지 이동)
    navigate(path);

    // 해당 요소로 스크롤 이동
    const targetElement = document.querySelector(`#${path.split("/")[1]}`);
    if (targetElement) {
      const location = targetElement.offsetTop;
      window.scrollTo({
        top: location - 80, // 추가적인 오프셋 값
        behavior: "smooth",  // 부드러운 스크롤 효과 적용
      });
    } else {
      console.error(`Element with path '${path}' not found.`);
    }
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>MaruTech</h2>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  {/* Link로 절대 경로로만 이동 */}
                  <Link
                    to={item.path} // 경로 이동
                    onClick={(e) => handleScroll(e, item.path)} // 클릭 시 부드럽게 스크롤 처리
                    className="menu__link"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
              <li className="menu__item">
                <Link to="/login" className="menu__link">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
