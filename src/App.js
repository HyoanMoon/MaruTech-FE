import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router, Routes, Route 임포트
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/UI/About";
import Blog from "./components/UI/Blog";
import Counter from "./components/UI/Counter";
import Hero from "./components/UI/Hero";
import Newsletter from "./components/UI/Newsletter";
import Services from "./components/UI/Services";
import Team from "./components/UI/Team";
import Testimonial from "./components/UI/Testimonial";
import Login from "./components/UI/Login"; // 로그인 페이지 임포트

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router> {/* <Router>로 감싸기 */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        {/* 로그인 페이지를 새로운 경로로 설정 */}
        <Route path="/login" element={<Login />} />
        {/* 다른 페이지는 스크롤로 이동 */}
        <Route path="/" element={
          <>
            <Hero theme={theme} />
            <Counter />
            <Services />
            <About />
            <Team />
            <Blog />
            <Testimonial />
            <Newsletter />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
