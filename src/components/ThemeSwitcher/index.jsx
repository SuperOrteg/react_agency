import React, {useContext} from 'react';
import { ThemeContext } from '../../App';

const ThemeSwitcher = () => {
	const themed = useContext(ThemeContext);

	return (<button className="nav-link btn fw-bold" onClick={themed.toggleTheme}>Dark Mode</button>)
};

export default ThemeSwitcher;