//OurDb
import React, { Component } from 'react';
import Searchbar from "./Searchbar/presentation";
import OrganismList from "./OrganismList/presentation";
import OrganismDetail from "./OrganismDetail/presentation";

class OurDb extends Component {
	constructor() {
		super();
		this.state = {
			count: 60,
			organismSingle: {
				id: 0,
				isChecked: false,
				gggsss: ""
			},
			list: []
		}
	}
	componentDidMount() {
		this.setState({
			list: [
				"Aethina tumdia",
				"Bombus terrestis"
			]
		})
	}
	render() {
		return (
			<div>
				<h1>OurDb</h1>
				<h2>BLAST Databases</h2>
				<Searchbar
					//props pass to children
					data = {this.state}
				/>
				<OrganismList
					data = {this.state}
				/>
				<OrganismDetail

				/>
			</div>
		);
	}
}

export default OurDb;
