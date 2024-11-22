import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/UI/Home";  // Home 컴포넌트 임포트
import Login from "./components/UI/Login";
import About from "./components/UI/About";  // About 컴포넌트 임포트
import Services from "./components/UI/Services";  // Services 컴포넌트 임포트
import Blog from "./components/UI/Blog";  // Blog 컴포넌트 임포트
import Counter from "./components/UI/Counter";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home theme={theme} />} />  {/* 루트 경로에서 Home 렌더링 */}
        <Route path="/about" element={<About />} />  {/* 절대 경로로 About 렌더링 */}
        <Route path="/services" element={<Services />} />  {/* 절대 경로로 Services 렌더링 */}
        <Route path="/projects" element={<Counter />} />  {/* 절대 경로로 Projects 렌더링 */}
        <Route path="/blog" element={<Blog />} />  {/* 절대 경로로 Blog 렌더링 */}
  
      </Routes>
    </Router>
  );
}

export default App;
