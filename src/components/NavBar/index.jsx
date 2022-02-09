import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
	<Link to="/">Home</Link>
	<Link to="/about">About</Link>
	<Link to="/works">Works</Link>
	</>
)};

export default NavBar;