import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import caseStudies from '../../data/caseStudies';
import { ThemeContext } from '../../App';

const StudyCase = () => {
  const { caseSlug } = useParams();
  const [currentCase, setCurrentCase] = useState(caseStudies.find((studies) => studies.slug === caseSlug));
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const foundCase = caseStudies.find((studies) => studies.slug === caseSlug);
    setCurrentCase(foundCase);
  }, [caseSlug])

  return (
    <div style={theme}>
      <h1>{currentCase.title}</h1>
      <p>{currentCase.description}</p>
      <p>{currentCase.client}</p>
    </div>
  	);
};

export default StudyCase;