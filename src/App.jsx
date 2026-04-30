import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  const [dark, setDark] = useState(true);

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDark(false);
  }, []);

  // apply theme
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? "🌙" : "☀️"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}