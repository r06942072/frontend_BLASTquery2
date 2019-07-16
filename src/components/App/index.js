import React, { Component } from 'react';
import YourQuery from '../YourQuery';
import OurDb from '../OurDb';
import Program from '../Program';
import ResetSubmit from '../ResetSubmit';
//import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allList: this._getAllList()
		}
	}
	componentDidMount() {
		/*
		this.setState({
			allList: this._getAllList()
		});
		*/
	}
	_getAllList = () => {
		const allList = [
			{ "id": 1, "fullName": "Aethina tumdia", "isChecked": false},
			{ "id": 2, "fullName": "Bombus terrestis", "isChecked": false },
			{ "id": 3, "fullName": "Hyalella azteca", "isChecked": false }
		];
		return allList;
	}
	render() {
		return (
			<div>
				<YourQuery />
				<br />
				<p>----------------------------------------</p>
				<OurDb
					allList = {this.state.allList}
				/>
				<br />
				<p>----------------------------------------</p>
				<Program />
				<br />
				<p>----------------------------------------</p>
				<ResetSubmit />
				<br />
				<p>----------------------------------------</p>
			</div>
		);
	}
}

export default App;
