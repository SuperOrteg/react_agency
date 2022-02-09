import React, {useContext} from 'react';
import { ThemeContext } from '../../App';

const Footer = () => {
	const {theme} = useContext(ThemeContext);

	return (
	<footer className="mt-auto" style={theme}>
    <p>Cover for Agency, by <a href="https://github.com/SuperOrteg" style={theme}>Antoine</a>.</p>
  </footer>
)};

export default Footer;