import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';
import React, {useContext} from 'react';
import { ThemeContext } from '../../App';

const NavBar = () => {
	const {theme} = useContext(ThemeContext);

	return (
	<header className="mb-auto" style={theme}>
    <div>
      <h3 className="float-md-start mb-0">Agency</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
		<Link className="nav-link" style={theme} to="/">Home</Link>
		<Link className="nav-link" style={theme} to="/about">About</Link>
		<Link className="nav-link" style={theme} to="/works">Works</Link>
		<ThemeSwitcher />
      </nav>
    </div>
  </header>
)};

export default NavBar;