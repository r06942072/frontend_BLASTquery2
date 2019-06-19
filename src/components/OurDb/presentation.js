//OurDb
import React from 'react';
import * as MyCSS from './style';
import searchBar from '../elements/searchBar/';
import aaa from '../elements/searchBar/index';

function Presentation(props) {
	return (
		<div>
			<h1>OurDb</h1>
			<p>BLAST Databases</p>
			<input type="text" placeholder="Search..." />
			<aaa />
		</div>
	);
}

export default Presentation;