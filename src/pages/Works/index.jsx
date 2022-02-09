import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import caseStudies from '../../data/caseStudies';
import StudyCaseCard from '../../components/StudyCaseCard';

const Works = () => {
	const {theme} = useContext(ThemeContext);

	return (
		<>
	<div style={theme}>
	<h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
	<p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
	</div>
	<div className="row mt-4">
	{caseStudies.map((caseS) => <StudyCaseCard title={caseS.title} description={caseS.description} client={caseS.client} slug={caseS.slug} />)}
	</div>
	</>
	)
};

export default Works;