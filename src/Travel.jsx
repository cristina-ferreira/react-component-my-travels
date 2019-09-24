import React, { Fragment } from 'react';

const Travel = ({ name, country, photoUrl, distance }) => (
	<Fragment>
		<p>I traveled to {name}, {country}, {distance} km from Lisbon</p>
		<img className="image" src={photoUrl} alt=""/>
	</Fragment>
);
export default Travel