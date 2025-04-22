import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";

import "./styles.css";

function HomePage() {
  return <div className="page">🏠 Page</div>;
}

function NotFoundPage() {
  return <div className="page">🧐 Page</div>;
}

function ApplePage() {
  return <div className="page">🍎 Page</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/apple" className="link">
          Apple
        </Link>

        <Link to="/pageb" className="link">
          pageb
        </Link>
        <Link to="/applet" className="link">
          Applet
        </Link>
        <Link to="/test" className="link">
          Test
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/apple">
          <Route path="/" element={<ApplePage />} />
          <Route path="*" element={<Navigate replace to="/apple" />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
