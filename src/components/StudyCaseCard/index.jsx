import React, {useContext} from 'react';
import { ThemeContext } from '../../App';

const StudyCaseCard = (props) => {
	const {theme} = useContext(ThemeContext);

	return (
	  <div class="col-4">
	    <div class="card" style={theme}>
	      <div class="card-body">
	        <h5 class="card-title">{props.title}</h5>
	        <p class="card-text">{props.description}</p>
	        <a href={`/works/${props.slug}`} class="btn btn-primary">{props.client}</a>
	      </div>
	    </div>
	  </div>
		)
};

export default StudyCaseCard;