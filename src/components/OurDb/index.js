//OurDb
import React, { Component } from 'react';
import Searchbar from "./Searchbar/presentation";

class OurDb extends Component {
	constructor() {
		super();
		this.state = {
			count: 60
		}
	}

	render() {
		return (
			<div>
				<h1>OurDb</h1>
				<h2>BLAST Databases</h2>
				<Searchbar
					//props pass to children
					data={this.state}
				/>
			</div>
		);
	}
}

export default OurDb;
