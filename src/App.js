import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import All from "./pages/All";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <p>
            <Link to="/">Home</Link>
            <Link to="all">Összes Pokémon</Link>
            <Link to="search">Pokémon keresése</Link>
            <Link to="*"></Link>
          </p>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
