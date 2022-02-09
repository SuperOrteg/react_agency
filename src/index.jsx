import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
    <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));