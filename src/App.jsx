import React, { useState, useMemo, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import NavBar from "./components/NavBar";
import StudyCase from "./components/StudyCase";
import Footer from "./components/Footer";
import "./App.scss";

const themedArray = {
	dark: {
		color: "#FFF",
		backgroundColor: "#212529",
	},
	light: {
		color: "#212529",
		backgroundColor: "#FFF",
	},
};

export const ThemeContext = React.createContext({
	theme: themedArray.dark,
	toggleTheme: () => {},
});

const App = () => {
	const root = document.getElementById("root")

	root.classList.add("d-flex", "h-100", "text-center", "text-white", "container");

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	});

	const toggleTheme = useCallback(function () {
		setTheme((t) => (t === "light" ? "dark" : "light"));
	}, []);

	const value = useMemo(
		function () {
			theme === 'light' ? document.body.classList.remove('bg-dark') : document.body.classList.add('bg-dark');
			return {
				theme: theme === "light" ? themedArray.light : themedArray.dark,
				toggleTheme,
			};
		},
		[toggleTheme, theme]
	);

	return (
		<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
		<Router>
			<ThemeContext.Provider value={value}>
				<NavBar />
				<main className="px-3">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/works" element={<Works />} />
						<Route path="works/:caseSlug" element={<StudyCase />} />
					</Routes>
				</main>
				<Footer />
			</ThemeContext.Provider>
		</Router>
		</div>
	);
};

export default App;
